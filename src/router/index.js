import { createWebHistory, createRouter } from "vue-router";
import LoginPage from "@/views/login.vue";
import HomePage from "@/views/Home.vue";

const routes = [
    {
        path: "/",
        name: "HomePage",
        component: HomePage,
    }, {
        path: "/login",
        name: "LoginPage",
        component: LoginPage,
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;