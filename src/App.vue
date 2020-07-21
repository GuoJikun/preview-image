<template>
    <div id="app">
        <div class="preview">
            <div class="preview-item">
                <h2>基础用法</h2>
                <div class="preview-item-ctx">
                    <button class="button" @click="show">点击查看预览界面</button>
                    <owl-preview-image v-model="visiable" :src="a"></owl-preview-image>
                </div>
            </div>
            <div class="preview-item">
                <h2>基础用法--设置宽高</h2>
                <div class="preview-item-ctx">
                    <button class="button" @click="show1">点击查看预览界面</button>
                    <owl-preview-image v-model="visiable1" :src="a" width="90vw" height="90vh"></owl-preview-image>
                </div>
            </div>
            <!-- <div class="preview-item">
                <h2>基础用法--设置宽高1</h2>
                <div class="preview-item-ctx">
                    <button class="button" @click="show2">点击查看预览界面</button>
                    <button class="button" @click="switchImage">切换图片</button>
                    <owl-preview-image v-model="visiable2" :src="b"></owl-preview-image>
                </div>
            </div> -->
        </div>
    </div>
</template>

<script>
import jpg from "@/assets/a.jpg";
import logo from "@/assets/logo.png";
import OwlPreviewImage from "@/components/preview-image";
export default {
    name: "App",
    components: { OwlPreviewImage },
    data() {
        return {
            a: jpg,
            b: logo,
            visiable: false,
            visiable1: false,
            visiable2: false,
        };
    },
    mounted() {
        // alert(`${window.innerWidth}, ${window.outerWidth}`);
        this.getScrollWidth();
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
