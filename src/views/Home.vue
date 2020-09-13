<template>
  <div class="home">
    <Header></Header>
<<<<<<< HEAD
    <nav class="navigation">
      <a class="navigation-item" href="#">すべて</a>
      <a class="navigation-item" href="#">トップス</a>
      <a class="navigation-item" href="#">パンツ</a>
      <a class="navigation-item" href="#">アウター</a>
      <a class="navigation-item" href="#">シューズ</a>
      <a class="navigation-item" href="#">バッグ</a>
    </nav>

    <div v-if="isUploaded">
      <p>洋服を追加してみよう。</p>
      <img class="shoes" src="@/assets/shoes.png" alt="シューズの画像" />
    </div>
    <div v-else>
      <!-- firebaseから取得してここにアイテムの画像などの一覧を表示する -->
    </div>
=======
    <Navigation></Navigation>
    <p>洋服を追加してみよう。</p>
    <img class="shoes" src="@/assets/shoes.png" alt="シューズの画像" />
>>>>>>> origin/feature/itemaddTop
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
</style>
