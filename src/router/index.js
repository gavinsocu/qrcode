import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "",
            redirect: "/home",
        },
        {
            path: "/home",
            name: "home",
            component: () => import("../home/home.vue"),
            meta: {
                home: true,
            },
        },
        {
            path: "/login",
            name: "login",
            component: () => import("../login/login.vue"),
            meta: {
                login: true,
            },
        },
        {
            path: "/sign",
            name: "sign",
            component: () => import("../main/qrcode.vue"),
            meta: {
                sign: true,
            },
        },
        {
            path: "/qrcode",
            name: "qrcode",
            component: () => import("../main/qrcode.vue"),
        },
    ],
});

export default router;
