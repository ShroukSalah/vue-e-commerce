import { createWebHistory, createRouter } from "vue-router";
import LoginPage from "@/views/login.vue";
import HomePage from "@/views/Home.vue";

const routes = [
  {
    path: "/",
    name: "LoginPage",
    component: LoginPage,
  },
  {
    path: "/home",
    name: "HomePage",
    component: HomePage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;