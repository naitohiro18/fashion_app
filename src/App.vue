<template>
  <div id="app">
    <router-link to="/login">ログインページ</router-link>
    <router-view></router-view>

    
  </div>
</template>

<style lang="scss">
.body{
  padding:0;
  margin:0;

}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.header{
  width:100%;
  height:50px;
  border-bottom: 1px solid black;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
