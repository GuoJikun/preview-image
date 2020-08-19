<template>
    <div>
        <div class="preview">
            <div class="preview-item">
                <h2>基础用法</h2>
                <div class="preview-item-ctx">
                    <button class="button" @click="show">点击查看预览界面</button>
                    <fox-preview-image v-model="visiable" :src="[a, b]"></fox-preview-image>
                </div>
            </div>
            <div class="preview-item">
                <h2>基础用法-只有一张图片时不显示左右的切换按钮</h2>
                <div class="preview-item-ctx">
                    <button class="button" @click="show1">点击查看预览界面-没有切换按钮</button>
                    <fox-preview-image v-model="visiable1" :src="[a]"></fox-preview-image>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import jpg from "@/assets/a.jpg";
import logo from "@/assets/logo.png";
import FoxPreviewImage from "@/components/preview-image";
export default {
    components: { FoxPreviewImage },
    data() {
        return {
            a: jpg,
            b: logo,
            visiable: false,
            visiable1: false,
        };
    },
    methods: {
        show() {
            this.visiable = true;
        },
        show1() {
            this.visiable1 = true;
        },
        show2() {
            this.visiable2 = true;
        },
        switchImage() {
            const s = this.b;
            const flag = s.includes("logo");
            if (flag) {
                this.b = jpg;
            } else {
                this.b = logo;
            }
            console.log(this.b);
        },
    },
};
</script>

<style lang="scss">
#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    height: 150vh;
}
.preview {
    max-width: 1300px;
    margin: 0 auto;
}
.button {
    background-color: #fff;
    color: #409eff;
    border: 1px solid #409eff;
    line-height: 1em;
    padding: 8px 20px;
    font-size: 14px;
    border-radius: 4px;
    outline: none;
    cursor: pointer;
    &:hover {
        color: white;
        background-color: #409eff;
    }
}
</style>
