const pluginRss = require('@11ty/eleventy-plugin-rss');
const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

module.exports = function (eleventyConfig) {
    // Copy the `img` and `css` folders to the output
    eleventyConfig.addPassthroughCopy('images');
    eleventyConfig.addPassthroughCopy('css');

    // Add plugins
    eleventyConfig.addPlugin(pluginRss);
    eleventyConfig.addPlugin(pluginSyntaxHighlight);

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
