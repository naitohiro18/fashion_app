<template>
  <div id="app">
<<<<<<< .merge_file_a11588
=======
   
     <div v-if="user">
    <button v-on:click="logOut">log Out</button>
    </div>
    <div v-else>
    <router-link to="/login">googleログインページ</router-link>
     <router-link to="/mail">メールログインページ</router-link>
     <router-link to="/register">登録ページ</router-link>
     <router-link to="/mypage">マイページ</router-link>
    </div>
    <router-view></router-view>

>>>>>>> .merge_file_a07492
    <div class="header">
      <div v-if="user">
        <button v-on:click="logOut">log Out</button>
      </div>
      <div v-else>
        <router-link to="/mail">ログイン/登録</router-link> |
        <router-link to="/mypage">Mypage</router-link> |
        <router-link to="/itemtable">item</router-link> |
      </div>

      <router-view></router-view>
    </div>
  </div>
</template>
<script>
<<<<<<< .merge_file_a11588
import firebase from "firebase";
import { currentUser } from "@/firebase.js";
=======
import firebase from "firebase"
import {currentUser} from "@/firebase.js"
>>>>>>> .merge_file_a07492

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
      this.$store.dispatch("addUser", info);
    },
    logOut() {
      firebase.auth().signOut();
    },

    authState() {
      firebase.auth().onAuthStateChanged(user => {
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
