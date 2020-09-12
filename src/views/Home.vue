<template>
  <div class="home">
    <Header></Header>
    <nav class="navigation">
      <a class="navigation-item" href="#">すべて</a>
      <a class="navigation-item" href="#">トップス</a>
      <a class="navigation-item" href="#">パンツ</a>
      <a class="navigation-item" href="#">アウター</a>
      <a class="navigation-item" href="#">シューズ</a>
      <a class="navigation-item" href="#">バッグ</a>
    </nav>

    <p>洋服を追加してみよう。</p>
    <img class="shoes" src="../assets/shoes.png" alt="シューズの画像" />
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src

import Header from "../components/Header";
import Footer from "../components/Footer";
export default {
  name: "Home",
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="scss">
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
