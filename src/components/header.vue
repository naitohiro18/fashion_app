<template>
  <div class="header">
    <img class="hanger" src="@/assets/hanger.png" alt="hanger_logo" />
    <img class="mycloz" src="@/assets/my_cloz.png" alt="mycloz_logo" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 350px;
  height: 100px;
  border-bottom: none;
  padding-top: px;
}
.hanger {
  flex: 1;
  width: 30px;
  padding-right: 15px;
  padding-left: 25px;
}
.mycloz {
  flex: 2;
  max-height: 50px;
  padding-right: 25px;
}
</style>
