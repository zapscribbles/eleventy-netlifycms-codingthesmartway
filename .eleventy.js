module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('images');
    eleventyConfig.addPassthroughCopy('admin');

    return {
        dir: {
            includes: '_includes',
            layouts: '_includes/layouts',
        },
    };
};
