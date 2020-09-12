import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Mail from "../views/mail.vue";
import Store from "../store/index.js";
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    //ルーティングの設定
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/about",
      name: "About",

      component: () =>
        import(/* webpackChunkName: "about" */ "../views/About.vue"),
    },
    {
      path: "/mail",
      name: "Mail",
      component: Mail,
      meta: {
        isPublic: true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((page) => page.meta.isPublic)) {
    next();
  } else if (Store.state.user) {
    next();
  } else {
    next("/mail");
  }
});
export default router;
