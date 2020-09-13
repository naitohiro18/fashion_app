<template>
  <div class="log in">
    <Header></Header>
    <div v-show="!signup_vesible">
      <Signin></Signin>
    </div>
    <!--基本的にはSigninにしといてアカウントを持っている人にはSignupを表示させるようにする -->

    <div v-show="signup_vesible">
      <Signup></Signup>
    </div>
    <div>
      <p class="message">初めての方はこちら</p>
      <button class="btn" v-on:click="signup_vesible = !signup_vesible">
        アカウント新規作成の方はこちら
      </button>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import Signup from "@/components/Signup.vue";
import Signin from "@/components/Signin.vue";
import Header from "../components/header";

export default {
  components: {
    Signup,
    Signin,
    Header
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

<style scoped>
.btn {
  background-color: rgb(96, 211, 146);
  border-radius: 50px 50px 50px 50px;
  width: 80%;
  height: 50px;
  color: white;
  font-size: 18px;
}
.message {
  font-size: 6px;
  margin-top: 150px;
  text-align: left;
  padding-left: 30px;
}
</style>
