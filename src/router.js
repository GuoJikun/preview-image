import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

//其他
import home from "./views/home.vue";

const route = new Router({
    mode: "history",
    routes: [
        {
            name: "test",
            path: "/test",
            component: () => import(/* webpackChunkName: "test" */ "@/views/test.vue"),
            meta: {
                title: "测试",
            },
        },
        {
            name: "home",
            path: "/",
            component: home,
            meta: {
                title: "首页",
            },
        },
    ],
});

export default route;
