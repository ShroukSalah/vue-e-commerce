import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/views/index.vue";
import LoginPage from "@/views/login.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/LoginPage",
    name: "LoginPage",
    component: LoginPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;