<template>
  <div>
    <h1>Update</h1>
    <p>名前：<input type="text" /></p>
    <p>アカウント名：<input type="text" /></p>
    <p>性別：<input type="text" /></p>
    <!-- あとでoptionに変更 -->
    <p>身長：<input type="number" />cm</p>
    <p>アイコン：<input type="url" /></p>
    <button v-on:click="update" class="button">更新</button>
  </div>
</template>

<script>
import { db } from "@/main";
import "firebase/firestore";
import { auth } from "@/main";
// import firebase from "@/main";
export default {
  data() {
    return {
      users: [
        // {
        //     id: "1cDioH2FGCzCpnfkgXWv",
        //     name:"tom"
        //     }
      ]
    };
  },
  methods: {
    update() {
      const user = {
        name: this.name,
        account: this.account,
        gender: this.gender,
        height: this.height,
        icon_URL: this.icon_URL
      };
      db.collection("users")
        .add({ user })
        .then(user => this.$router.push("mypage" + user.id));
      console.log("更新");
    }
  },

  created() {
    db.collection("users")
      .get()
      .then(snapshot => {
        snapshot.docs.forEach(doc => {
          this.users.push({
            id: doc.id,
            ...doc.data()
          });
        });
      });
    auth.onAuthStateChanged(user => {
      this.currentUser = user;
    });
  }
};
</script>
