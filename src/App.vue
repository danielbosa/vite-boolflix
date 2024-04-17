<template>
  <h1 class="text-center">Ciao</h1>
  <i class="fa fa-solid fa-home"></i>
</template>

<script>
import axios from 'axios';
import { store } from './store.js';
  export default {
    name: 'App',
    data(){
      return{
        store
      }
    },
    methods:{
      getMovies(){
        axios.get(this.store.apiUrl + this.store.endPoint.movie,this.store.options).then((res)=>{
          console.log(res.data.results)
        })
      },
      getTvSeries(){
        axios.get(this.store.apiUrl + this.store.endPoint.tv,this.store.options).then((res)=>{
          console.log(res.data.results)
        })
      }
    },
    created(){
      this.getMovies();
      this.getTvSeries();
    }
  }
</script>

<style lang="scss" scoped>

</style>