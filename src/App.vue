<template>
  <div id="app">
    <div class="header">
      <div v-if="user">
        <button v-on:click="logOut">log Out</button>
      </div>
      <div v-else>
        <router-link to="/mail" tag="button" class="loginButton"
          >ログイン/登録</router-link
        >
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
  font-family: SimSun;
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

.loginButton {
  padding: 10px;
  color: #fff;
  background-color: #42b983;
  border-bottom: 5px solid #1c8f5b;
  border-radius: 100vh;
}
.loginButton:hover {
  margin-top: 3px;
  color: #fff;
  background: #54cf98;
  border-bottom: 2px solid #1c8f5b;
}
</style>
