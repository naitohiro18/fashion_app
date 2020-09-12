<template>
  <div class="footer">
    <img class="home" src="../assets/home.png" alt="home_logo" />
    <img class="add" src="../assets/add.png" alt="add_logo" />
    <img class="mypage" src="../assets/mypage.png" alt="mypage_logo" />
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
  position: fixed;
  bottom: 0px;
  padding-bottom: 12px;
  img {
    width: 8%;
    opacity: 70%;
  }
}
</style>
