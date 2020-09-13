<template>
  <div>
    <h1>Mypage</h1>
    <div>
      <img src="src/assests/shoes.png" alt="" />
      <h1>Name: {{}}</h1>
      <p>Account: {{}}</p>
      <p>Gender: {{}}</p>
      <P>Height: {{}}</P>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {}
    };
  }
};
</script>
