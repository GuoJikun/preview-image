module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "/preview-image/" : "/",
    configureWebpack: {
        output: {
            libraryExport: "default",
        },
    },
    css: { extract: false },
};
