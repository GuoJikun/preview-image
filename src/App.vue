<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            visiable: false,
            visiable1: false,
            visiable2: false,
        };
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
