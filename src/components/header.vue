<template>
  <div class="header">
    <img class="hanger" src="../assets/hanger.png" alt="hanger_logo" />
    <img class="mycloz" src="../assets/my_cloz.png" alt="mycloz_logo" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
  display: flex;

  max-width: 350px;
  height: 80px;
}
.hanger {
  flex: auto;
  width: 20%;
}
.mycloz {
  flex: auto;
  width: 60%;
}
</style>
