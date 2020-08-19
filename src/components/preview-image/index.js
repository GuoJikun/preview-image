import PreviewImage from "./src/index.vue";

PreviewImage.install = Vue => {
    Vue.component(PreviewImage.name, PreviewImage);
};

export default PreviewImage;
