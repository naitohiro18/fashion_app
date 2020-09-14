<template>
  <!-- このvueは使いません -->
  <nav class="navigation">
    <div class="navigation-item" v-on:click="getallclothes">すべて</div>
    <div class="navigation-item" v-on:click="getclothes(トップス)">トップス</div>
    <div class="navigation-item" v-on:click="getclothes(パンツ)">パンツ</div>
    <div class="navigation-item" v-on:click="getclothes(アウター)">アウター</div>
    <div class="navigation-item" v-on:click="getclothes(シューズ)">シューズ</div>
    <div class="navigation-item" v-on:click="getclothes(バッグ)">バッグ</div>
  </nav>
</template>

<script>
import { db } from "@/main";
export default {
  data() {
    return {
      clothes: null
    };
  },
  methods: {
    getallclothes() {
      db.collection("items")
        .get()
        .then(snapshot => {
          this.clothes = snapshot.docs.map(doc => {
            return {
              id: doc.id,
              ...doc.data()
            };
          });
        })
        .catch(err => {
          console.log("Error getting documents", err);
        });
      // console.log(this.clothes[0].item.itemsize);
    }
  }
};
</script>

<style lang="scss" scoped>
.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  list-style: none;
  overflow-x: auto;
  border-bottom: 1px solid #ccc;
}

.navigation-item {
  padding: 20px 15px;
  color: gray;
  word-break: keep-all;
  text-decoration: none;
}

.navigation-item:hover {
  color: #4aa459;
  border-bottom: 1px solid #4aa459;
}
</style>
