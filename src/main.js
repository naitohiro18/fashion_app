import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase";
import "firebase/firestore";

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyDqTnzna5bIoZnBW_bXTsyUWOHWOniWeow",
  authDomain: "fashion-app-b85b2.firebaseapp.com",
  databaseURL: "https://fashion-app-b85b2.firebaseio.com",
  projectId: "fashion-app-b85b2",
  storageBucket: "fashion-app-b85b2.appspot.com",
  messagingSenderId: "39987669197",
  appId: "1:39987669197:web:e03b69c784a37fb5d92184",
  measurementId: "G-6P59YDTFZ4"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const firestorage = firebase.storage();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

firebase.getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      unsubscribe();
      resolve(user);
    }, reject);
  });
};
