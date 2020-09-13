//このページではgoogle loginができるようにする

<template>
  <div class="log in">
    <img alt="Vue logo" src="@/assets/hanger.png" />
    <div>google でログイン</div>
    <div v-if="user">
      <button v-on:click="logOut">log Out</button>
    </div>
    <div v-else>
      <button v-on:click="logIn">log in</button>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      user: null
    };
  },

  methods: {
    addUser(info) {
      console.log(info);
      this.$store.dispatch("addUser", info);
    },
    logIn() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider);
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
