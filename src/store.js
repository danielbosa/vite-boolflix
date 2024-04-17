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
            /*Ogni volta che faccio una chiamata api, passo api key */
            api_key: '2b9c68b42b884cbe5e46d84cf477a0f5',
            query: 'a',

        }
    },
    movies:[],
    tvSeries:[],
    /*Da concatenare con quello che mi arriva dalle API */
    imageUrl: 'https://image.tmdb.org/t/p/original',
})