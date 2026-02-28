import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/home.vue";
import Projects from "../pages/projects.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/projects",
        name: "Projects",
        component: Projects
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 };
        }
    }
});

export default router;
