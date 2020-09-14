<template>
  <div>
    <Header></Header>
    <h1>Mypage</h1>
    <div>
      <img src="src/assests/shoes.png" alt />
      <h1>Name: {{ this. name }}</h1>
      <p>Account: {{ this.account }}</p>
      <p>Gender: {{ this.gender}}</p>
      <P>Height: {{ this.height }} cm</P>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/header";
import Footer from "../components/footer";
export default {
  data() {
    return {
      user: {},
      name: "Hiroto",
      account: "@hiroto.fashion.app",
      gender: "male",
      height: 170,
    };
  },
  components: {
    Header,
    Footer
  }
};
</script>
