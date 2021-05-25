<template>
  <div id="login">
      账号:<input name="id" ><br>
      密码:<input name="pow"><br>
      <button @click="Submit">提交</button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  methods : {
      Submit(){
          let id = document.getElementsByName('id')[0].value;
          let pow = document.getElementsByName('pow')[0].value;
          console.log(this.$store);
          this.$store.commit('login',id , pow)
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
