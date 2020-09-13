import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Itempost from "../views/Itempost.vue";
import ItemTable from "../views/ItemTable.vue";
import Mail from "../views/mail.vue";
import firebase from "firebase";
import Mypage from "../views/Mypage.vue";
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    //ルーティングの設定
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
      path: "/itempost",
      component: Itempost
    },
    {
      path: "/mypage",
      name: "Mypage",
      component: Mypage,
      meta: { requiresAuth: true }
    },
    {
      path: "/mypage",
      name: "Mypage",
      component: Mypage,
      meta: { requiresAuth: true }
    },
    {
      path: "/itemtable",
      name: "ItemTable",
      component: ItemTable
    }
  ]
});

firebase.getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      unsubscribe();
      resolve(user);
    }, reject);
  });
};

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(recode => recode.meta.requiresAuth);
  if (requiresAuth && !(await firebase.getCurrentUser())) {
    next({ path: "/mail", query: { redirect: to.fullPath } });
  } else {
    next();
  }
});

export default router;
