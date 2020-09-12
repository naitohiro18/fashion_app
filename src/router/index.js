import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Mail from "../views/mail.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/mail",
    name: "Mail",
    component: Mail
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

import Store from "../store/index.js";
router.beforeEach((to, from, next) => {
  if (Store.state.user) {
    next();
  } else {
    next("/mail");
  }
});

export default router;
