<template>
  <div class="home">
    <Header></Header>
    <Navigation></Navigation>
    <p>洋服を追加してみよう。</p>
    <img class="shoes" src="@/assets/shoes.png" alt="シューズの画像" />
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
  components: {
    Header,
    Footer,
    Navigation
  }
};
</script>

<style lang="scss" scoped>
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
</style>
