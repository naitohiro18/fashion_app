<template>
  <div class="footer">
    <router-link to="/">
      <img class="home" src="@/assets/home.png" alt="home_logo" />
    </router-link>
    <router-link to="/itempost">
      <img class="add" src="@/assets/add.png" alt="add_logo" />
    </router-link>
    <router-link to="/mypage/:firebase().user">
      <img class="mypage" src="@/assets/mypage.png" alt="mypage_logo" />
    </router-link>
    <!-- <div>{{ $data }}</div> -->
  </div>
</template>

<script>
import firebase from "firebase";
import { db } from "@/main";
// import auth from "firebase";
export default {
  data() {
    return {
      authId: firebase.auth().currentUser
    };
  },
  firestore() {
    return {
      user: db.collection("users").doc(this.$route.params.uid)
    };
  }
};
</script>

<style lang="scss" scoped>
.footer {
  border-top: 3px solid gray;
  padding-top: 20px;
  display: flex;
  align-items: center;
  position: fixed;
  justify-content: space-around;
  padding-bottom: 12px;
  margin: 0;
  left: 0;
  bottom: 0px;
  max-height: 30px;
  width: 100%;
}

a {
  img {
    opacity: 70%;
    width: 30%;
    margin: 0 auto;
  }
}
</style>
