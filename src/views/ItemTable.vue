<template>
  <div class="home">
    <Header></Header>
    <Navigation></Navigation>
    <div class="item-table"></div>
    <div class="item-box"></div>
    <div class="item-category">ブランド<br />カテゴリー</div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/header.vue";
import Navigation from "../components/Navigation.vue";
import Footer from "../components/footer.vue";

export default {
  components: {
    Header,
    Footer,
    Navigation
  }
};
</script>

<style lang="scss" scoped>
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
