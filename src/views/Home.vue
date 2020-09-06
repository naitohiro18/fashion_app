<template>
  <div class="home">
    <Header></Header>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src

import Header from "../components/header.vue"
import Footer from "../components/footer.vue"
export default {
  name: "Home",
  components: {
    Header,
    Footer
  }
  }

</script>

<style lang="scss">
 
 </style>