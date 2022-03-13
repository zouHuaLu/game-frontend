import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const history = createWebHistory();
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("../components/anchor/Game.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../components/backend/Login.vue"),
  },
  {
    path: "/worktabs",
    name: "worktabs",
    component: () => import("../components/backend/WorkTabs.vue"),
  },
];
const router = createRouter({
  history,
  routes,
});
export default router;
