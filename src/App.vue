<template>
  <div id="app">
    <div class="header">
      <div v-if="user">
        <button v-on:click="logOut">log Out</button>
      </div>
      <div v-else>
        <router-link to="/mail">ログイン/登録</router-link> |
        <router-link to="/mypage">Mypage</router-link> |
      </div>

      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import firebase from "firebase";
import { currentUser } from "@/firebase.js";

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
