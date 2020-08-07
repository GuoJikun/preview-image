module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "/owl-ui/" : "/",
    configureWebpack: {
        output: {
            libraryExport: "default",
        },
    },
    css: { extract: false },
};
