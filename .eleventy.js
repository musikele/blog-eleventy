const pluginRss = require('@11ty/eleventy-plugin-rss');
const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const { DateTime } = require('luxon');
const sass = require("sass");
const path = require("path");

/**
 * @param {import("@11ty/eleventy").UserConfig} eleventyConfig
 */
module.exports = function (eleventyConfig) {
    const markdownIt = require("markdown-it");
    const markdownItFootnote = require("markdown-it-footnote");

    const markdownLibrary = markdownIt().use(markdownItFootnote);

    eleventyConfig.setLibrary("md", markdownLibrary);


    // Values can be static:
    eleventyConfig.addGlobalData("base", "https://michelenasti.com");
    eleventyConfig.addGlobalData("sitename", "Michele Nasti");
    eleventyConfig.addGlobalData("twitterName", "micnasti");

    // Copy the `img` and `css` folders to the output
    eleventyConfig.addPassthroughCopy('images');
    eleventyConfig.addPassthroughCopy('uploads');
    eleventyConfig.addPassthroughCopy('css');
    eleventyConfig.addPassthroughCopy('archives');
    eleventyConfig.addPassthroughCopy('favicon.ico');
    eleventyConfig.addPassthroughCopy('scripts');
    eleventyConfig.addPassthroughCopy('admin');

    eleventyConfig.addTemplateFormats("scss");

    // Add plugins
    eleventyConfig.addPlugin(pluginRss);
    eleventyConfig.addPlugin(pluginSyntaxHighlight);

    /**
     * 
     * @param {Date} dateObj 
     * @returns 
     */
    const postDateFilter = (dateObj) => {
        return DateTime.fromJSDate(dateObj)
            .setLocale('en')
            .toLocaleString(DateTime.DATE_FULL);
    };

    eleventyConfig.addFilter('postDate', postDateFilter);

    /**
     * 
     * @param {string} path 
     * @returns 
     */
    const imagePathFilter = (path) => {
        if (process.env.LOCAL) {
            return path;
        }
        return `https://ik.imagekit.io/xthvogziier/tr:w-720/${path}`;

    };
    eleventyConfig.addFilter("imagePath", imagePathFilter);

    /**
     * 
     * @param {Date} dateObj 
     * @returns 
     */
    const toIsoDateFilter = (dateObj) => {
        return DateTime.fromJSDate(dateObj).toFormat("yyyy/MM/dd");
    };
    eleventyConfig.addFilter('toISODate', toIsoDateFilter);

    /**
     * Estrae il nome del file senza estensione da inputPath
     * es: "./_posts/2025-11-21-Hobby-project.md" -> "2025-11-21-Hobby-project"
     * @param {string} inputPath - The full input path of the file
     * @returns {string} - The file name without extension
     */
    const fileNameFilter = (inputPath) => {
        return path.basename(inputPath, path.extname(inputPath));
    };
    eleventyConfig.addFilter('fileName', fileNameFilter);

    /**
     * 
     * @param {Object} collection 
     * @returns 
     */
    const sortObjectByKeyFilter = (collection) => {
        const entries = Object.entries(collection);
        const toReturn = entries.sort((entry1, entry2) => {
            if (entry1[0] <= entry2[0]) return -1;
            else return 1;

        });
        return toReturn;
    };
    eleventyConfig.addFilter('sortObjectByKey', sortObjectByKeyFilter);

    /**
     * 
     * @param {string} inputContent 
     * @returns 
     */
    const compileScss = async function (inputContent) {
        let result = sass.compileString(inputContent);

        // This is the render function, `data` is the full data cascade
        return async (data) => {
            return result.css;
        };
    };
    // Creates the extension for use
    eleventyConfig.addExtension("scss", {
        outputFileExtension: "css", // optional, default: "html"

        // `compile` is called once per .scss file in the input directory
        compile: compileScss
    });

    eleventyConfig.addCollection("posts", (collectionApi) => collectionApi.getFilteredByGlob("_posts/**/*.md"));

    return {
        // Control which files Eleventy will process
        // e.g.: *.md, *.njk, *.html, *.liquid
        templateFormats: ['md', 'njk', 'html'],

        // Pre-process *.md files with: (default: `liquid`)
        markdownTemplateEngine: 'njk',

        // Pre-process *.html files with: (default: `liquid`)
        htmlTemplateEngine: 'njk',
    };
};
