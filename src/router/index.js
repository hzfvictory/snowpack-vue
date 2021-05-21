import Vue from "vue";
import VueRouter from "vue-router";

const Login = () => import("../../src/pages/login/index");

Vue.use(VueRouter);

export const currencyRoutes = [
  {
    path: "/login",
    component: Login,
    name: "login",
    meta: {
      title: "登录页",
      hidden: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  // base: import.meta.env.BASE_URL,
  routes: currencyRoutes,
});

export default router;
