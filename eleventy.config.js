import pluginRss from '@11ty/eleventy-plugin-rss';
import pluginSyntaxHighlight from '@11ty/eleventy-plugin-syntaxhighlight';
import sass from 'sass';
import path from 'path';
import markdownIt from 'markdown-it';
import markdownItFootnote from 'markdown-it-footnote';

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
    eleventyConfig.addFilter('imagePath', (imagePath) => {
        if (process.env.LOCAL) {
            return imagePath;
        }
        return `https://ik.imagekit.io/xthvogziier/tr:w-720/${imagePath}`;
    });

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
