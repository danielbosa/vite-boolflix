import {reactive} from 'vue';

export const store = reactive({
    apiUrl: 'https://api.themoviedb.org/3/',
    endPoint:
    {
        movie: 'search/movie',
        tv: 'search/tv'
    },
    options:{
        params:{
            /*At every call, I must pass the API key */
            api_key: '2b9c68b42b884cbe5e46d84cf477a0f5',
            query: 'a',

        }
    },
    movies: [],
    tvSeries: [],
    /*to concat with data got from api to get the wanted image */
    imageUrl: 'https://image.tmdb.org/t/p/original',
})