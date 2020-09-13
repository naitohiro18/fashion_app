<template>
  <nav class="navigation">
    <a class="navigation-item" href="#">すべて</a>
    <a class="navigation-item" href="#">トップス</a>
    <a class="navigation-item" href="#">パンツ</a>
    <a class="navigation-item" href="#">アウター</a>
    <a class="navigation-item" href="#">シューズ</a>
    <a class="navigation-item" href="#">バッグ</a>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
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
</style>
