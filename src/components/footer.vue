<template>
  <div class="footer">
    <router-link to="/">
      <img class="home" src="@/assets/home.png" alt="home_logo" />
    </router-link>
    <router-link to="/itempost">
      <img class="add" src="@/assets/add.png" alt="add_logo" />
    </router-link>
    <router-link to="/mypage">
      <img class="mypage" src="@/assets/mypage.png" alt="mypage_logo" />
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  border-top: 3px solid gray;
  padding-top: 20px;
  display: flex;
  align-items: center;
  position: fixed;
  justify-content: space-around;
  padding-bottom: 12px;
  margin: 0;
  left: 0;
  bottom: 0px;
  max-height: 30px;
  width: 100%;
}

a {
  img {
    opacity: 70%;
    width: 30%;
    margin: 0 auto;
  }
}
</style>
