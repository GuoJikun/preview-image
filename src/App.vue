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
        </div>
    </div>
</template>

<script>
import jpg from "@/assets/a.jpg";
import OwlPreviewImage from "@/components/preview-image";
export default {
    name: "App",
    components: { OwlPreviewImage },
    data() {
        return {
            a: jpg,
            visiable: false,
            visiable1: false,
        };
    },
    methods: {
        show() {
            this.visiable = true;
            console.log(this.visiable);
        },
        show1() {
            this.visiable1 = true;
        },
    },
};
</script>

<style lang="scss">
#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
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
