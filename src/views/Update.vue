<template>
  <div>
    <h1>Update</h1>
    <p>名前<input type="name" /></p>
    <button v-on:click="update" class="button">更新</button>
  </div>
</template>

<script>
import { db } from "firebase";
//import "firebase/firestore";
export default {
  data() {
    return {
      users: []
    };
  },
  methods: {
    update() {
      db.collection("users").add({
        name: "tom"
      });
      // .then(
      //   (this.user =>
      //     this.$router.push("/user/" + this.user.uid + "/" + this.user.id),
      //   alert("The user got updated"))
      // );
    }
  }
};
</script>
