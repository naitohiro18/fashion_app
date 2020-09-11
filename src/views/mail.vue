//このページではmailloginができるようにする

<template>
  <div class="log in">
    <img alt="Vue logo" src="../assets/hanger.png" />
    <div>mailでログイン</div>

    <div v-show="signup_vesible"><Signup></Signup></div>
    <button v-on:click="signup_vesible = !signup_vesible">
      アカウント新規作成の方はこちら
    </button>

    <div v-show="!signup_vesible"><Signin></Signin></div>
    <!--基本的にはSigninにしといてアカウントを持っている人にはSignupを表示させるようにする -->
  </div>
</template>

<script>
import firebase from "firebase";
import Signup from "@/components/Signup.vue";
import Signin from "@/components/Signin.vue";

export default {
  components: {
    Signup,
    Signin
  },
  data() {
    return {
      signup_vesible: false,
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
    }
  }
};
</script>
