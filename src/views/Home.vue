<template>
  <div class="home">
    <Header></Header>
    <!-- <Navigation></Navigation> -->
    <p v-if="!this.clothes">洋服を追加してみよう。</p>
    <div v-else>
      <div v-for="cloth in clothes" :key="cloth.id">
        <img v-bind:src="cloth.item.image_url" alt="服の写真" />
        <span>{{ cloth.item.category }}</span>
        <span>{{ cloth.item.itemsize }}</span>
      </div>
    </div>
    <img class="shoes" src="@/assets/shoes.png" alt="シューズの画像" />
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src

import Header from "../components/header.vue";
// import Navigation from "../components/Navigation.vue";
import Footer from "../components/footer.vue";
import { db } from "@/main";
export default {
  name: "Home",
  data() {
    return {
      clothes: null
    };
  },
  components: {
    Header,
    Footer
    // Navigation
  },
  mounted() {
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
};
</script>

<style lang="scss">
.shoes {
  width: 200px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  top: 250px;
}

p {
  font-size: 30px;
  font-family: SimSun;
  margin: 0 auto;
  position: relative;
  top: 150px;
}

.item-table {
  display: flex;
}

.item-box {
  border-radius: 10%;
  margin-top: 20px;
  width: 30%;
  height: 140px;
  background-color: hotpink;
  display: flex;
}
.item-category {
  flex-direction: column;
  width: 30%;
  justify-content: flex-start;
}
</style>
