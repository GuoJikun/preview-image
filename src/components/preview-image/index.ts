import PreviewImage from "./src/index.vue";
import { App } from "vue";

PreviewImage.install = (app: App) => {
    app.component(PreviewImage.name, PreviewImage);
};

export default PreviewImage;
