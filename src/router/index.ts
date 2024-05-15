import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { name: "home", path: "/", component: () => import("../views/HomePage.vue")},
        { name: "test", path: "/test", component: () => import("../views/TestPage.vue")},
        { name: "chatgpt", path: "/chatgpt", component: () => import("../views/Chatgpt.vue")},
        { name: "pay", path: "/pay", component: () => import("../views/Gpay.vue")},
        { name: "login", path: "/login", component: () => import("../views/User.vue")},
        { name: "register", path: "/register", component: () => import("../views/User.vue")},
        { name: "chat", path: "/chat", component: () => import("../views/Chat.vue")},
    ]
})

export default router
