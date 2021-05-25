<template>
  <div id="app">
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  created(){
    
    axios.all([
      axios ({
        url: 'http://123.207.32.32:8000/home/multidata'
      }),
      axios ({
        url: 'http://123.207.32.32/:8000/home/data',
        params:{
          type : 'sell',
          page:5
        }
      })
    ]).then( axios.spread((res1,res2) => {
        console.log(res1);
        console.log(res2);
    }))
  }
}
</script>

<style>
</style>
