import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "Home",
    meta: { title: "首页" },
    component: () => import("../pages/home/index.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../pages/login/index.vue"),
  },
  {
    path: "*",
    redirect: "/login",
  },
];

const router = new Router({ routes });

export default router;
