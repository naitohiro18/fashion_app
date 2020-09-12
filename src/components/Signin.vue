<template>
  <div>
    <input v-model="email" class="form-control" type="email" />
    <input v-model="password" class="form-control" type="password" />
    <button v-on:click="logIn">log in</button>
  </div>
</template>
<style scoped></style>
<script>
import firebase from "firebase";
export default {
  data() {
    return {
      user: null,
      email: null,
      password: null
    };
  },
  methods: {
    addUser(info) {
      console.log(info);
      this.$store.dispatch("addUser", info);
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
    },

    logIn() {
      const res = firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password);
      console.log(res.user);
    },

    logOut() {
      firebase.auth().signOut();
    }
  },
  created() {
    this.authState();
  }
};
</script>
