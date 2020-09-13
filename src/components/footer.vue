<template>
  <div class="footer">
    <img class="home" src="@/assets/home.png" alt="home_logo" />
    <img class="add" src="@/assets/add.png" alt="add_logo" />
    <img
      class="mypage"
      src="@/assets/mypage.png"
      alt="mypage_logo"
      v-on:click="linkToMypage"
    />
  </div>
</template>

<script>
export default {
  methods: {
    linkToMypage() {
      this.$router.push("mypage");
    }
  }
};
</script>

<style lang="scss" scoped>
.footer {
  border-top: 3px solid gray;
  padding-top: 15px;
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0px;
  padding-bottom: 12px;
  img {
    width: 10%;
    opacity: 70%;
  }
}
</style>
