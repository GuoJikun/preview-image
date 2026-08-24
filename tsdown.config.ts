import { defineConfig } from "tsdown";

export default defineConfig([
    {
        platform: "neutral",
        fromVite: true,
        dts: { vue: true },
        css: {
            fileName: "index.css",
            minify: true,
        },
    },
]);
