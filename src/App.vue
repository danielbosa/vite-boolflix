<template>
  <HeaderComponent @searchWord="searchItem()" />
  <MainComponent :list="this.store.collections" />
</template>

<script>
import axios from 'axios';
import { store } from './store.js';
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
export default {
  name: 'App',
  components: {
    HeaderComponent,
    MainComponent,
  },
  data() {
    return {
      store,
      collectionsObj: {
        title: '',
        collection: [],
        searchWord: '',
      },
    }
  },
  methods: {
    searchItem() {
      this.getMedia()
    },
    getPopularMovies() {
      axios.get(this.store.apiUrl + this.store.endPoint.popularMovie, this.store.options).then((res) => {
        this.store.collections.push(this.collectionsObj);
        this.store.collections[this.store.collections.length - 1].title = 'Popular MOVIES';
        this.store.collections[this.store.collections.length - 1].collection = res.data.results.map((movie) => {
          //this.store.popularMovies = res.data.results.map((movie)=>{
          return {
            title: movie.title,
            originalTitle: movie.original_title,
            vote: movie.vote_average,
            language: movie.original_language,
            posterImage: movie.poster_path,
            overview: movie.overview
          }
        },
          (this.getPopularTvSeries())
          //
          //INSERISCI QUI ALTRA FUNZIONE
          //
        );
      }).catch((error) => {
        // handle error
        console.log(error);
        //this.store.error.message = error.message;
      }).finally(() => {
        //this.store.loading = false;
        console.log(this.store.collections)
        this.getPopularTvSeries();
        console.log(this.store.collections)
      });
    },
    getPopularTvSeries() {
      axios.get(this.store.apiUrl + this.store.endPoint.popularTvSeries, this.store.options).then((res) => {
        //this.store.popularTvSeries = res.data.results.map((tv)=>{
        this.store.collections.push(this.collectionsObj);
        this.store.collections[this.store.collections.length - 1].title = 'Popular SERIES';
        this.store.collections[this.store.collections.length - 1].collection = res.data.results.map((tv) => {
          return {
            title: tv.name,
            originalTitle: tv.original_name,
            vote: tv.vote_average,
            language: tv.original_language,
            posterImage: tv.poster_path,
            overview: tv.overview
          }
        });
      }).catch((error) => {
        // handle error
        console.log(error);
        //this.store.error.message = error.message;
      }).finally(() => {
        //this.store.loading = false;
        console.log(this.store.collections)
      });
    },
    getMovies() {
      axios.get(this.store.apiUrl + this.store.endPoint.movie, this.store.options).then((res) => {
        this.store.movies.title = 'Movies';
        this.store.movies.collection = res.data.results.map((movie) => {
          return {
            title: movie.title,
            originalTitle: movie.original_title,
            vote: movie.vote_average,
            language: movie.original_language,
            posterImage: movie.poster_path,
            overview: movie.overview
          }
        });
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
        this.store.tvSeries.title = 'TV Series';
        this.store.tvSeries.collection = res.data.results.map((tv) => {
          return {
            title: tv.name,
            originalTitle: tv.original_name,
            vote: tv.vote_average,
            language: tv.original_language,
            posterImage: tv.poster_path,
            overview: tv.overview
          }
        });
      }).catch((error) => {
        // handle error
        console.log(error);
        //this.store.error.message = error.message;
      }).finally(() => {
        //this.store.loading = false;
      });
    },
    //version with unique collections in store: array to be populated via api
    getMoviesEXP() {
      axios.get(this.store.apiUrl + this.store.endPoint.movie, this.store.options).then((res) => {
        //creo obj vuoto in store.collections
        this.store.collections.splice(2, 1, this.collectionsObj);
        console.log(this.store.collections);
        //assegno valore a prop title di store.collections[2]
        this.store.collections[2].title = 'Movies';
        //assegno valore a prop collection di store.collections[2] rimappando le chiavi
        this.store.collections[2].collection = res.data.results.map((tv) => {
          return {
            title: tv.name,
            originalTitle: tv.original_name,
            vote: tv.vote_average,
            language: tv.original_language,
            posterImage: tv.poster_path,
            overview: tv.overview
          }
        });
      }).catch((error) => {
        // handle error
        console.log(error);
        //this.store.error.message = error.message;
      }).finally(() => {
        //this.store.loading = false;
      });
    },
    getMoviesEXP2() {
      return axios.get(this.store.apiUrl + this.store.endPoint.popularMovie, this.store.options);
    },
    getTvSeriesEXP2() {
      return axios.get(this.store.apiUrl + this.store.endPoint.popularTvSeries, this.store.options);
    },
    getMedia() {
      Promise.all([this.getMoviesEXP2(), this.getTvSeriesEXP2()]).then((res) => {
        const moviesCollection = { ...this.collectionsObj };
        moviesCollection.title = 'Movies';
        console.log(res[0].data.results);
        moviesCollection.collection = res[0].data.results.map((movie) => {
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
        tvSeriesCollection.title = 'Tv Series';
        tvSeriesCollection.collection = res[1].data.results.map((tv) => {
          return {
            title: tv.name,
            originalTitle: tv.original_name,
            vote: tv.vote_average,
            language: tv.original_language,
            posterImage: tv.poster_path,
            overview: tv.overview
          }
        });

        this.store.collections.push(moviesCollection);
        this.store.collections.push(tvSeriesCollection);

        console.log(this.store.collections);
      })
    },
    created() {
      this.getMedia();
    }
  }
}
</script>

<style lang="scss" scoped>
@use './assets/styles/partials/variables' as *;

div {
  background-color: $secondary;
}
</style>