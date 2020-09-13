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
  padding-top: 15px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0px;
  padding-bottom: 12px;
}
  
a {
  img {
    width: 50%;
    opacity: 70%;
  }
}
</style>
