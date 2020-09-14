<template>
  <div class="home">
    <Header></Header>
    <div v-if="!this.clothes">
      <p>洋服を追加してみよう。</p>
      <img class="shoes" src="@/assets/shoes.png" alt="シューズの画像" />
    </div>
    <div v-else>
      <div v-for="cloth in clothes" :key="cloth.id">
        <img class="cloth-photo" v-bind:src="cloth.item.image_url" alt="服の写真" />
        <h3>{{ cloth.item.category }}</h3>
        <h3>{{ cloth.item.itemsize }}</h3>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src

import Header from "../components/header.vue";
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

<style lang="scss" scoped>
h3 {
  font-size: 12px;
}
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
.cloth-photo {
  width: 80%;
  height: 80%;
}
</style>
