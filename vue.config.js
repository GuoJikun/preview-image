const mode = process.env.NODE_ENV;

module.exports = {
    publicPath: mode === "production" ? "/preview-image/" : "/",
    configureWebpack: config => {
        config.resolve.alias.vue$ = "vue/dist/vue.esm.js";
        config.output.libraryExport = "default";
        if (mode === "production") {
            // 正式发布时移除console语句
            config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true;
        }
    },
    css: { extract: false },
};
