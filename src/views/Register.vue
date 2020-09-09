<template>
  <div>
<input v-model="email" class="form-control" type="email">
    <input v-model="password" class="form-control" type="password">
    <button v-on:click="Signup">Sign Up</button>
  </div>
</template>
<style scoped>

</style>
<script>
import firebase from "firebase"
export default {
  data(){
    return {
    user:null,
    email:null,
    password:null,
  }},
  methods:{
    addUser(info) {
      console.log(info)
      this.$store.dispatch("addUser", info);
    },

  
  Signup(){
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(errorCode)
  console.log(errorMessage)
})
    },

    authState(){
      firebase.auth().onAuthStateChanged(user =>  {
      console.log("authが実行")
        if (user) {
        // User is signed in.
       this.addUser(user);
       this.user=user;
       this.$router.push('/' )
       
      } 
      })
    }

    

  
},
created(){
    this.authState()
  }
}
</script>