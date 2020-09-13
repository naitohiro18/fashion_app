<template>
  <div class="home">
    <Header></Header>
    <Navigation></Navigation>
    <div v-if="itemNone">
      <p>洋服を追加してみよう。</p>
      <img class="shoes" src="@/assets/shoes.png" alt="シューズの画像" />
    </div>
    <div v-else>
      <div class="item-table"></div>
      <div class="item-box"></div>
      <div class="item-category">ブランド<br />カテゴリー</div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src

import Header from "../components/header.vue";
import Navigation from "../components/Navigation.vue";
import Footer from "../components/footer.vue";
export default {
  name: "Home",
  data() {
    return {
      itemNone: true
    };
  },
  components: {
    Header,
    Footer,
    Navigation
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
