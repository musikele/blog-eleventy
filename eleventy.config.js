import pluginRss from '@11ty/eleventy-plugin-rss';
import pluginSyntaxHighlight from '@11ty/eleventy-plugin-syntaxhighlight';
import sass from 'sass';
import path from 'path';
import fs from 'fs';
import markdownIt from 'markdown-it';
import markdownItFootnote from 'markdown-it-footnote';

const IMAGEKIT_BASE = 'https://ik.imagekit.io/xthvogziier';
const IMAGE_WIDTHS = [360, 480, 665, 720, 1080, 1440];
// Il contenuto è largo min(45rem, 90%): su mobile ~90vw, su desktop 720px
const IMAGE_SIZES = '(max-width: 800px) 90vw, 720px';
// Su mobile le immagini vengono servite con qualità ridotta
const MOBILE_MEDIA = '(max-width: 800px)';
const MOBILE_QUALITY = 65;

/**
 * URL ImageKit ridimensionato alla larghezza indicata
 * @param {string} imagePath
 * @param {number} width
 * @param {number} [quality] se assente, usa la qualità di default di ImageKit
 * @param {string} [format] es. 'avif'; se assente, ImageKit sceglie il formato (WebP)
 * @returns {string}
 */
function imageKitUrl(imagePath, width, quality, format) {
    if (process.env.LOCAL) {
        return imagePath;
    }
    const transform = [`w-${width}`, quality && `q-${quality}`, format && `f-${format}`]
        .filter(Boolean)
        .join(',');
    return `${IMAGEKIT_BASE}/tr:${transform}/${String(imagePath ?? '').replace(/^\/+/, '')}`;
}

/**
 * @param {string} imagePath
 * @param {number[]} widths
 * @param {number} [quality]
 * @param {string} [format]
 * @returns {string}
 */
function imageSrcset(imagePath, widths, quality, format) {
    return widths.map((w) => `${imageKitUrl(imagePath, w, quality, format)} ${w}w`).join(', ');
}

/**
 * @param {string} value
 * @returns {string}
 */
function escapeAttr(value) {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

/**
 * <picture> responsive: su mobile qualità MOBILE_QUALITY, su desktop qualità di default.
 * AVIF per i browser che lo supportano, altrimenti il formato scelto da ImageKit (WebP).
 * Il browser usa il primo <source> che corrisponde a media e type.
 * @param {string} imagePath
 * @param {Object<string, string | number>} [attrs] attributi extra per <img>
 * @param {{ widths?: number[], sizes?: string, fallbackWidth?: number }} [options]
 * @returns {string}
 */
function responsiveImage(imagePath, attrs = {}, options = {}) {
    const { widths = IMAGE_WIDTHS, sizes = IMAGE_SIZES, fallbackWidth = 720 } = options;
    const imgAttrs = Object.entries(attrs)
        .filter(([, value]) => value !== undefined && value !== null)
        .map(([key, value]) => ` ${key}="${escapeAttr(value)}"`)
        .join('');

    if (process.env.LOCAL || !imagePath) {
        return `<img src="${escapeAttr(imagePath ?? '')}"${imgAttrs}>`;
    }

    const src = escapeAttr(imageKitUrl(imagePath, fallbackWidth));
    const srcset = (quality, format) => escapeAttr(imageSrcset(imagePath, widths, quality, format));
    return (
        `<picture>` +
        `<source media="${MOBILE_MEDIA}" type="image/avif" srcset="${srcset(MOBILE_QUALITY, 'avif')}" sizes="${sizes}">` +
        `<source media="${MOBILE_MEDIA}" srcset="${srcset(MOBILE_QUALITY)}" sizes="${sizes}">` +
        `<source type="image/avif" srcset="${srcset(undefined, 'avif')}" sizes="${sizes}">` +
        `<img src="${src}" srcset="${srcset()}" sizes="${sizes}"${imgAttrs}>` +
        `</picture>`
    );
}

/**
 * 
 * @param {{
 *  setLibrary: (name: string, lib: any) => void,
 *  addGlobalData: (key: string, value: any) => void,
 *  addPassthroughCopy: (path: string) => void,
 *  addTemplateFormats: (format: string) => void,
 *  addPlugin: (plugin: any) => void,
 *  addFilter: (name: string, callback: (...args: any[]) => any) => void,
 *  addExtension: (name: string, extension: any) => void,
 *  addCollection: (name: string, callback: (collectionApi: any) => any) => void,
 * }} eleventyConfig 
 * @returns 
 */
export default async function (eleventyConfig) {
    const markdownLibrary = markdownIt().use(markdownItFootnote);

    // Le immagini locali nei post passano da ImageKit con <picture> responsive
    const defaultImageRender = markdownLibrary.renderer.rules.image;
    markdownLibrary.renderer.rules.image = (tokens, idx, options, env, self) => {
        const token = tokens[idx];
        const src = token.attrGet('src');
        if (!src || !src.startsWith('/') || src.startsWith('//') || /\.svg$/i.test(src)) {
            token.attrSet('loading', 'lazy');
            token.attrSet('decoding', 'async');
            return defaultImageRender(tokens, idx, options, env, self);
        }
        return responsiveImage(src, {
            alt: self.renderInlineAsText(token.children, options, env),
            title: token.attrGet('title') ?? undefined,
            loading: 'lazy',
            decoding: 'async',
        });
    };
    eleventyConfig.setLibrary('md', markdownLibrary);

    // Global data
    eleventyConfig.addGlobalData('base', 'https://michelenasti.com');
    eleventyConfig.addGlobalData('sitename', 'Michele Nasti');
    eleventyConfig.addGlobalData('twitterName', 'micnasti');

    // Passthrough copy
    eleventyConfig.addPassthroughCopy('images');
    eleventyConfig.addPassthroughCopy('uploads');
    eleventyConfig.addPassthroughCopy('css');
    eleventyConfig.addPassthroughCopy('archives');
    eleventyConfig.addPassthroughCopy('favicon.ico');
    eleventyConfig.addPassthroughCopy('scripts');
    eleventyConfig.addPassthroughCopy('admin');

    eleventyConfig.addTemplateFormats('scss');

    // Plugins
    eleventyConfig.addPlugin(pluginRss);
    eleventyConfig.addPlugin(pluginSyntaxHighlight);

    // Filters
    eleventyConfig.addFilter('postDate', (dateObj) => {
        if (!dateObj) return '';
        const date = dateObj instanceof Date ? dateObj : new Date(dateObj);
        if (isNaN(date.getTime())) return '';
        return new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        }).format(date);
    });

    /**
     * @param {string} imagePath
     * @returns {string}
     */
    eleventyConfig.addFilter('imagePath', (imagePath, width = 720) => imageKitUrl(imagePath, width));

    eleventyConfig.addShortcode('responsiveImage', responsiveImage);

    /**
     * Formatta una data in formato "yyyy/MM/dd"
     * @param {Date} dateObj
     * @returns {string}
     */
    eleventyConfig.addFilter('toISODate', (dateObj) => {
        const year = dateObj.getFullYear();
        const month = String(dateObj.getMonth() + 1).padStart(2, '0');
        const day = String(dateObj.getDate()).padStart(2, '0');
        return `${year}/${month}/${day}`;
    });

    /**
     * Estrae il nome del file senza estensione da inputPath
     * es: "./_posts/2025-11-21-Hobby-project.md" -> "2025-11-21-Hobby-project"
     * @param {string} inputPath
     * @returns {string}
     */
    eleventyConfig.addFilter('fileName', (inputPath) => {
        return path.basename(inputPath, path.extname(inputPath));
    });

    /**
     * Ordina un oggetto per chiave
     * @param {Object} collection
     * @returns {Array}
     */
    eleventyConfig.addFilter('sortObjectByKey', (collection) => {
        const entries = Object.entries(collection);
        return entries.sort((a, b) => (a[0] <= b[0] ? -1 : 1));
    });

    // CSS critico incorporato nell'<head>: evita richieste bloccanti in catena.
    // Calcolato una volta per build.
    const INLINE_STYLES = ['css/simple-v1.min.css', 'css/prism-okaidia.css', 'css/custom.scss'];
    let inlineStylesCache = null;
    eleventyConfig.on('eleventy.before', () => {
        inlineStylesCache = null;
    });
    eleventyConfig.addShortcode('inlineStyles', () => {
        if (inlineStylesCache === null) {
            const css = INLINE_STYLES.map((file) =>
                sass.compileString(fs.readFileSync(file, 'utf8'), {
                    syntax: file.endsWith('.scss') ? 'scss' : 'css',
                    style: 'compressed',
                }).css
            ).join('');
            inlineStylesCache = `<style>${css}</style>`;
        }
        return inlineStylesCache;
    });

    // SCSS extension
    eleventyConfig.addExtension('scss', {
        outputFileExtension: 'css',
        compile: async function (inputContent) {
            const result = sass.compileString(inputContent);
            return async () => result.css;
        },
    });

    // Collections
    eleventyConfig.addCollection('posts', (collectionApi) => {
        return collectionApi.getFilteredByGlob('_posts/**/*.md');
    });

    // Normalizza i tag in lowercase
    eleventyConfig.addGlobalData('eleventyComputed', {
        tags: (data) => {
            if (data.tags && Array.isArray(data.tags)) {
                return data.tags.map((tag) =>
                    typeof tag === 'string' ? tag.toLowerCase() : tag
                );
            }
            return data.tags;
        },
    });

    // Collection con tutti i tag unici (normalizzati in lowercase)
    eleventyConfig.addCollection('tagsList', (collectionApi) => {
        const tagsSet = new Set();
        collectionApi.getAll().forEach((item) => {
            if (item.data.tags && Array.isArray(item.data.tags)) {
                item.data.tags.forEach((tag) => {
                    if (typeof tag === 'string') {
                        tagsSet.add(tag.toLowerCase());
                    }
                });
            }
        });
        return [...tagsSet].sort();
    });

    // Ignores
    eleventyConfig.ignores.add('AGENTS.md');

    return {
        templateFormats: ['md', 'njk', 'html'],
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
    };
}
