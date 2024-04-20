<template>
  <!-- <Jumbo/> -->
  <HeaderComponent @searchWord="searchItem()" @home="getHomepage()"/>
  <MainComponent :list="this.store.collections"/>
</template>

<script>
import axios from 'axios';
import { store } from './store.js';
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
import Jumbo from './components/Jumbo.vue';
export default {
  name: 'App',
  components: {
    HeaderComponent,
    MainComponent,
    Jumbo
  },
  data() {
    return {
      store,
      collectionsObj: {
        title: '',
        collection: [],
        class: '',//per definire styling
      }
    }
  },
  methods: {
    searchItem() {
      if (this.store.options.params.query) {
        this.getMovies();
        this.getTvSeries();
      }
    },
    getMovies() {
      axios.get(this.store.apiUrl + this.store.endPoint.movie, this.store.options).then((res) =>{
        const moviesCollection = { ...this.collectionsObj };
        moviesCollection.title = 'Movies';
        moviesCollection.class = 'Searched';
        console.log(res.data.results);
        
        //!!!ATTN!!!
        this.store.movies.title = 'SEARCHED movies';
        this.store.movies.collection = res.data.results.map((movie) => {
          return {
            title: movie.title,
            originalTitle: movie.original_title,
            vote: movie.vote_average,
            language: movie.original_language,
            posterImage: movie.poster_path,
            overview: movie.overview
          }})
          console.log(this.store.movies);
        
        moviesCollection.collection = res.data.results.map((movie) => {
          return {
            title: movie.title,
            originalTitle: movie.original_title,
            vote: movie.vote_average,
            language: movie.original_language,
            posterImage: movie.poster_path,
            overview: movie.overview
          };
      });
      this.store.collections.splice(2,1,moviesCollection);
    }).catch((error) => {
        // handle error
        console.log(error);
        //this.store.error.message = error.message;
      }).finally(() => {
        //this.store.loading = false;
      });
    },
    getTvSeries() {
      axios.get(this.store.apiUrl + this.store.endPoint.tv, this.store.options).then((res) => {
        const seriesCollection = { ...this.collectionsObj };
        seriesCollection.title = 'TV Series';
        seriesCollection.class = 'Searched';
        seriesCollection.collection = res.data.results.map((tv) => {
          return {
            title: tv.name,
            originalTitle: tv.original_name,
            vote: tv.vote_average,
            language: tv.original_language,
            posterImage: tv.poster_path,
            overview: tv.overview
          }
        });
        this.store.collections.splice(3,1,seriesCollection);
      }).catch((error) => {
        // handle error
        console.log(error);
        //this.store.error.message = error.message;
      }).finally(() => {
        //this.store.loading = false;
      });
    },
    getPopularMovies() {
      return axios.get(this.store.apiUrl + this.store.endPoint.popularMovie, this.store.options);
    },
    getPopularSeries() {
      return axios.get(this.store.apiUrl + this.store.endPoint.popularTvSeries, this.store.options);
    },
    getTopRated() {
      return axios.get(this.store.apiUrl + this.store.endPoint.topRatedSeries, this.store.options);
    },
    getMedia() {
      Promise.all([this.getTopRated(),this.getPopularMovies(), this.getPopularSeries()]).then((res) => {
        const topRatedSeries = { ...this.collectionsObj };
        topRatedSeries.title = 'Top Rated Tv Series';
        topRatedSeries.class = 'Rated';
        topRatedSeries.collection = res[0].data.results.map((tv) => {
          return {
            title: tv.name,
            originalTitle: tv.original_name,
            vote: tv.vote_average,
            language: tv.original_language,
            posterImage: tv.poster_path,
            overview: tv.overview
          }
        });
        const moviesCollection = { ...this.collectionsObj };
        moviesCollection.title = 'Popular Movies';
        moviesCollection.class = 'Popular';
        console.log(res[0].data.results);
        moviesCollection.collection = res[1].data.results.map((movie) => {
          return {
            title: movie.title,
            originalTitle: movie.original_title,
            vote: movie.vote_average,
            language: movie.original_language,
            posterImage: movie.poster_path,
            overview: movie.overview
          }
        });
        const tvSeriesCollection = { ...this.collectionsObj };
        tvSeriesCollection.title = 'Popular Tv Series';
        tvSeriesCollection.class = 'Popular';
        tvSeriesCollection.collection = res[2].data.results.map((tv) => {
          return {
            title: tv.name,
            originalTitle: tv.original_name,
            vote: tv.vote_average,
            language: tv.original_language,
            posterImage: tv.poster_path,
            overview: tv.overview
          }
        });

        //push into the Collections that is the container displayed
        this.store.collections.splice(0,1,topRatedSeries);
        this.store.collections.splice(1,1,moviesCollection);
        this.store.collections.splice(2,1,tvSeriesCollection);
        
        //push into the specific containers to preserve data and be able to recall them at need
        this.store.topRatedSeries.splice(0,1,topRatedSeries);
        this.store.popularMovies.splice(1,1,moviesCollection);
        this.store.popularTvSeries.splice(2,1,tvSeriesCollection);

        console.log(this.store.collections);
      })
    },
    getHomepage(){
      this.store.collections = [];
      this.store.collections.push(...this.store.topRatedSeries,...this.store.popularMovies, ...this.store.popularTvSeries);
      console.log(this.store.collections)
    },
  },
  created() {
      this.getMedia();
    }
}
</script>

<style lang="scss" scoped>
@use './assets/styles/partials/variables' as *;

div {
  background-color: $secondary;
}
</style>