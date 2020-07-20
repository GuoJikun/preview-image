import PreviewImage from "./src/index.vue";

PreviewImage.install = Vue => {
    Vue.component(`Owl${PreviewImage.name}`, PreviewImage);
};

export default PreviewImage;
