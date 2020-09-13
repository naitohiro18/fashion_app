<template>
  <div>
    <h1>Mypage</h1>
    <div>
      <img src="src/assests/shoes.png" alt="" />
      <h1>Name: {{}}</h1>
      <p>Account: {{}}</p>
      <p>Gender: {{}}</p>
      <P>Height: {{}}</P>
      <router-link to="/update">
        <button>編集</button>
      </router-link>
      <p>{{ $data }}</p>
    </div>
  </div>
</template>

<script>
import { firestore } from "firebase";
import { db } from "firebase";
export default {
  data() {
    return {
      users: [],
      userSample: firestore().users,
    };
  },
  firestore() {
    return {
      users: db
        .collection("users")
        .doc("YZ2HyMBc5L2c34fIYHTY")
        .get()
    };
  }
};
</script>
