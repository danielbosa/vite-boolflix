<template>
  <HeaderComponent @searchWord="searchItem()"/>
  <MainComponent/>
</template>

<script>
import axios from 'axios';
import { store } from './store.js';
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
  export default {
    name: 'App',
    components:{
      HeaderComponent,
      MainComponent,
    },
    data(){
      return{
        store
      }
    },
    methods:{
      searchItem(){
        if(this.store.options.params.query){
          this.getMovies();
          this.getTvSeries();
        }
      },
      getMovies(){
        axios.get(this.store.apiUrl + this.store.endPoint.movie,this.store.options).then((res)=>{
          this.store.movies = res.data.results.map((movie)=>{
            return{
              title: movie.title,
              originalTitle: movie.original_title,
              vote: movie.vote_average,
              language: movie.original_language,
              posterImage: movie.poster_path,
              overview: movie.overview
            }
          });
          console.log(this.store.movies);
        }).catch((error) =>{
            // handle error
           console.log(error);
           //this.store.error.message = error.message;
        }).finally(() =>{
          //this.store.loading = false;
        });
      },
      getTvSeries(){
        axios.get(this.store.apiUrl + this.store.endPoint.tv,this.store.options).then((res)=>{
          this.store.tvSeries = res.data.results.map((tv)=>{
            return{
              title: tv.name,
              originalTitle: tv.original_name,
              vote: tv.vote_average,
              language: tv.original_language,
              posterImage: tv.poster_path,
              overview: tv.overview
            }
          });
          console.log(this.store.tvSeries);
        }).catch((error) =>{
            // handle error
           console.log(error);
           //this.store.error.message = error.message;
        }).finally(() =>{
          //this.store.loading = false;
        });
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