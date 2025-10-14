import { defineConfig } from "tsdown";
import * as sass from "sass";
import fs from "node:fs/promises";
import path from "node:path";

export default defineConfig([
    {
        platform: "neutral",
        fromVite: true,
        dts: { vue: true },
        hooks: {
            "build:done": async () => {
                console.log("✨ 构建完成，正在编译 SCSS...");

                const input = path.resolve("src/index.scss");
                const output = path.resolve("dist/index.css");

                const result = sass.compile(input, {
                    style: "compressed", // compressed / expanded
                });

                // 确保 dist 目录存在
                await fs.mkdir(path.dirname(output), { recursive: true });

                // 写入 CSS 文件
                await fs.writeFile(output, result.css);

                console.log(`✅ SCSS 已编译: ${output}`);
            },
        },
    },
]);
