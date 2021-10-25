const mode = process.env.NODE_ENV;

module.exports = {
    publicPath: mode === "production" ? "/preview-image/" : "/",

    css: { extract: false },
};
