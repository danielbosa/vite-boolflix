import {reactive} from 'vue';

export const store = reactive({
    apiUrl: 'https://api.themoviedb.org/3/',
    endPoint:
    {
        movie: 'search/movie',
        tv: 'search/tv',
        popularMovie: 'movie/popular',
        popularTvSeries: 'tv/popular',
        topRatedSeries: 'tv/top_rated',
    },
    options:{
        params:{
            /*At every call, I must pass the API key */
            api_key: '2b9c68b42b884cbe5e46d84cf477a0f5',
        }
    },
    search: false,
    //per gestire la visibilità dei list component: prima o dopo una ricerca query
    collections:[

    ],
    movies: {
        title: '',
        collection: []
    },
    tvSeries: {
        title: '',
        collection: []
    },
    popularMovies: [],
    popularTvSeries:[],
    topRatedSeries: [],
    /*to concat with data got from api to get the wanted image */
    imageUrl: 'https://image.tmdb.org/t/p/original',
})