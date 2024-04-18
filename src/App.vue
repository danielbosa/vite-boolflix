<template>
  <HeaderComponent @searchWord="searchItem()"/>
  <MainComponent :list="this.store.collections"/>
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
        store,
        collectionsObj : {
            title: '',
            collection: [],
            searchWord: '',
        },
      }
    },
    methods:{
      searchItem(){
        if(this.store.options.params.query){
          // this.getMovies();
          // this.getTvSeries();
          this.store.collections.push(this.collectionsObj);
          const wordS = this.store.collections[this.store.collections.length-1].searchWord = this.store.options.params.query;
          this.getTvSeriesEXP();

          this.store.collections.push(this.collectionsObj);
          const wordM = this.store.collections[this.store.collections.length-1].searchWord = this.store.options.params.query;
          this.getMoviesEXP();

          console.log(this.store.collections)
        }
      },getPopularMovies(){
        axios.get(this.store.apiUrl + this.store.endPoint.popularMovie,this.store.options).then((res)=>{
          this.store.popularMovies = res.data.results.map((movie)=>{
            return{
              title: movie.title,
              originalTitle: movie.original_title,
              vote: movie.vote_average,
              language: movie.original_language,
              posterImage: movie.poster_path,
              overview: movie.overview
            }
          });
        }).catch((error) =>{
            // handle error
           console.log(error);
           //this.store.error.message = error.message;
        }).finally(() =>{
          //this.store.loading = false;
        });
      },
      getPopularTvSeries(){
        axios.get(this.store.apiUrl + this.store.endPoint.popularTvSeries,this.store.options).then((res)=>{
          this.store.popularTvSeries = res.data.results.map((tv)=>{
            return{
              title: tv.name,
              originalTitle: tv.original_name,
              vote: tv.vote_average,
              language: tv.original_language,
              posterImage: tv.poster_path,
              overview: tv.overview
            }
          });
        }).catch((error) =>{
            // handle error
           console.log(error);
           //this.store.error.message = error.message;
        }).finally(() =>{
          //this.store.loading = false;
        });
      },
      getMovies(){
        axios.get(this.store.apiUrl + this.store.endPoint.movie,this.store.options).then((res)=>{
          this.store.movies.title = 'Movies';
          this.store.movies.collection = res.data.results.map((movie)=>{
            return{
              title: movie.title,
              originalTitle: movie.original_title,
              vote: movie.vote_average,
              language: movie.original_language,
              posterImage: movie.poster_path,
              overview: movie.overview
            }
          });
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
          this.store.tvSeries.title = 'TV Series';
          this.store.tvSeries.collection = res.data.results.map((tv)=>{
            return{
              title: tv.name,
              originalTitle: tv.original_name,
              vote: tv.vote_average,
              language: tv.original_language,
              posterImage: tv.poster_path,
              overview: tv.overview
            }
          });
        }).catch((error) =>{
            // handle error
           console.log(error);
           //this.store.error.message = error.message;
        }).finally(() =>{
          //this.store.loading = false;
        });
      },
      //version with unique collections in store: array to be populated via api
      getMoviesEXP(){
        axios.get(this.store.apiUrl + this.store.endPoint.movie,this.store.options).then((res)=>{
          //this.store.collections.push(this.collectionsObj)
          this.store.collections[this.store.collections.length-1].title = 'Movies';
          this.store.collections[this.store.collections.length-1].collection = res.data.results.map((tv)=>{
            return{
              title: tv.name,
              originalTitle: tv.original_name,
              vote: tv.vote_average,
              language: tv.original_language,
              posterImage: tv.poster_path,
              overview: tv.overview
            }
          });
        }).catch((error) =>{
            // handle error
           console.log(error);
           //this.store.error.message = error.message;
        }).finally(() =>{
          //this.store.loading = false;
        });
      },
      getTvSeriesEXP(){
        axios.get(this.store.apiUrl + this.store.endPoint.tv,this.store.options).then((res)=>{
          //this.store.collections.push(this.collectionsObj)
          this.store.collections[this.store.collections.length-1].title = 'TV Series';
          this.store.collections[1].collection = res.data.results.map((tv)=>{
            return{
              title: tv.name,
              originalTitle: tv.original_name,
              vote: tv.vote_average,
              language: tv.original_language,
              posterImage: tv.poster_path,
              overview: tv.overview
            }
          });
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
      this.getPopularTvSeries();
      this.getPopularMovies();
    }
  }
</script>

<style lang="scss" scoped>
@use './assets/styles/partials/variables' as *;

div{
  background-color: $secondary;
}
</style>