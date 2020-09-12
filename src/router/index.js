import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Mail from "../views/Mail.vue";
import Mypage from "../components/Mypage.vue";
import firebase from "firebase"

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
  },
  {
    path: "/mypage",
    name: "Mypage",
    component: Mypage,
    meta: { requiresAuth: true }
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(recode => recode.meta.requiresAuth);
  if (requiresAuth && !(await firebase.getCurrentUser())) {
    next({ path: "/mail", query: { redirect: to.fullPath } });
  } else {
    next();
  }
});

export default router;
