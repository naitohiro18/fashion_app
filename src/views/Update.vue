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
    <div>
      <p v-for="user in users" :key="user.id">
        {{ user.name }}
        {{ user.account }}
        {{ user.height }}
        {{ user.gender }}
        {{ user.icon_URL }}
      </p>
    </div>
    <div>{{ $data }}</div>
  </div>
</template>

<script>
import { db } from "@/main";
import "firebase/firestore";
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
      // const user = {
      //   name: "taro"
      // };
      db.collection("users")
        // .add(user)
        // .then(ref => {
        //   this.users.push({
        //     id: ref.id,
        //     ...user
        .add({
          name: "jimmy"
          // createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
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
  }
};
</script>
