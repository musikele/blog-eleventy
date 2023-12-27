const pluginRss = require('@11ty/eleventy-plugin-rss');
const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const { DateTime } = require('luxon');
const sass = require("sass");

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

    eleventyConfig.addFilter('postDate', (dateObj) => {
        return DateTime.fromJSDate(dateObj)
            .setLocale('en')
            .toLocaleString(DateTime.DATE_FULL);
    });

    eleventyConfig.addFilter("imagePath", (path) => {
        if (process.env.LOCAL) {
            return path;    
        } 
        return `https://ik.imagekit.io/xthvogziier/tr:w-1440/${path}`;

        // to use netlify: 
        // return `https://michelenasti.com/.netlify/images?url=${path}&w=1440`;
    });

    eleventyConfig.addFilter('toISODate', (dateObj) => {
        return DateTime.fromJSDate(dateObj).toFormat("yyyy/MM/dd");
    });

    eleventyConfig.addFilter('sortObjectByKey', (collection) => {
        const entries = Object.entries(collection);
        const toReturn = entries.sort((entry1, entry2) => {
            if (entry1[0] <= entry2[0]) return -1;
            else return 1;

        });
        return toReturn;
    });

    // Creates the extension for use
    eleventyConfig.addExtension("scss", {
        outputFileExtension: "css", // optional, default: "html"

        // `compile` is called once per .scss file in the input directory
        compile: async function (inputContent) {
            let result = sass.compileString(inputContent);

            // This is the render function, `data` is the full data cascade
            return async (data) => {
                return result.css;
            };
        }
    });

    eleventyConfig.addCollection("posts", function (collectionApi) {
        return collectionApi.getFilteredByGlob("_posts/**/*.md");
    });

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
