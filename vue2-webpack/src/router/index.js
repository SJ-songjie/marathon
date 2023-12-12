import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

let routes = [
  {
    path: "*",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../pages/login/index.vue"),
  },
];

const router = new Router({
  routes,
});

export default router;
