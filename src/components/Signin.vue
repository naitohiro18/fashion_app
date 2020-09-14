<template>
  <div>
    <div>すでにアカウントをお持ちの方</div>
    <p>
      メールアドレス
      <input v-model="email" class="form-control email-form" type="email" />
    </p>
    <p>
      パスワード
      <input
        v-model="password"
        class="form-control password-form"
        type="password"
      />
    </p>
    <button v-on:click="logIn" class="button">ログイン</button>
  </div>
</template>

<script>
import firebase from "firebase";
// import { auth } from "@/main";
import { db } from "firebase";
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
      const result = firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password);
      db.collection("users")
        .doc(result.user.uid)
        .set({
          name: result.user.name,
          account: result.user.account,
          gender: result.user.gender,
          height: result.user.height,
          icon: result.user.icon
        });
      console.log(result.user);
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
<style scoped>
.email-form {
  border-radius: 50px 50px 50px 50px;
  width: 80%;
  height: 50px;
  background-color: rgb(235, 235, 235);
}
.password-form {
  border-radius: 50px 50px 50px 50px;
  width: 80%;
  height: 50px;
  background-color: rgb(235, 235, 235);
}
.button {
  border-radius: 50px 50px 50px 50px;
  width: 80%;
  height: 50px;
  background-color: rgb(105, 169, 186);
  color: white;
  font-size: 18px;
  margin-top: 100px;
}
</style>
