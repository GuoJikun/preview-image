import PreviewImage from "./src/index.vue";
import { App } from "vue";

const install = (app: App) => {
  app.component(PreviewImage.name, PreviewImage);
};

export default install;

export const FoxPreviewImage = PreviewImage;
