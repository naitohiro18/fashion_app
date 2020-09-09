<template>
  <div id="app">
    <div v-if="user">
      <button v-on:click="logOut">log Out</button>
    </div>
    <div v-else>
      <router-link to="/login">googleログインページ</router-link>
      <router-link to="/mail">メールログインページ</router-link>
      <router-link to="/register">登録ページ</router-link>
    </div>
    <router-view></router-view>

    <div class="header">
      <h1>My Cloz</h1>
      <h2>アカウント作成/ログイン</h2>
    </div>
  </div>
</template>
<script>
import firebase from "firebase";
import { currentUser } from "@/assets/firebase.js";

export default {
  data() {
    return {
      user: null
    };
  },
  mounted() {
    this.user = currentUser;
  },
  methods: {
    addUser(info) {
      console.log(info);
      this.$store.dispatch("addUser", info);
    },
    logOut() {
      firebase.auth().signOut();
    },

    authState() {
      firebase.auth().onAuthStateChanged(user => {
        console.log("authが実行");
        if (user) {
          // User is signed in.
          this.addUser(user);
          this.user = user;
        } else {
          // No user is signed in.
          this.addUser(null);
          this.user = null;
        }
      });
    }
  },
  created() {
    this.authState();
  }
};
</script>

<style lang="scss">
.body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.header {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid black;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
