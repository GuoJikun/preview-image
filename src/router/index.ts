import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory("/preview-image/"),
  routes,
});

export default router;
