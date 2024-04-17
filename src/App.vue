<template>
  <HeaderComponent @searchWord="searchItem()"/>
</template>

<script>
import axios from 'axios';
import { store } from './store.js';
import HeaderComponent from './components/HeaderComponent.vue';
  export default {
    name: 'App',
    data(){
      return{
        store
      }
    },
    components:{
      HeaderComponent,
    },
    methods:{
      searchItem(){
        console.log(this.store.searchWord);
        this.store.options.params.query = this.store.searchWord;
        this.getMovies()
      },
      getMovies(){
        axios.get(this.store.apiUrl + this.store.endPoint.movie,this.store.options).then((res)=>{
          this.store.movies = res.data.results.map((movie)=>{
            return{
               title: movie.title,
               originalTitle: movie.original_title,
               vote: movie.vote_average,
               language: movie.original_language,
            }
          });
          console.log(this.store.movies);
        });
      },
      getTvSeries(){
        axios.get(this.store.apiUrl + this.store.endPoint.tv,this.store.options).then((res)=>{
          this.store.tv = res.data.results.map((tv)=>{
            return{
               name: tv.title,
               originalTitle: tv.original_name,
               vote: tv.vote_average,
               language: tv.original_language,
            }
          });
          console.log(this.store.movies);
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