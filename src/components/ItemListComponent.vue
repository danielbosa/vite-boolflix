<template>
    <section>FILM</section>
    <div class="d-flex gap-2 flex-wrap">
        <CardComponent v-for="movie in store.movies" :title="movie.title" :originalTitle="movie.originalTitle" :vote="movie.vote" :language="movie.language" :image="this.store.imageUrl+movie.posterImage "/>
    </div>
    <section class="db-debug">SERIE TV</section>
    <div class="d-flex gap-2 flex-wrap">
        <CardComponent v-for="tv in store.tvSeries" :title="tv.title" :originalTitle="tv.originalTitle" :vote="tv.vote" :language="tv.language" :image="this.store.imageUrl+tv.posterImage "/>
    </div>
</template>

<script>
    import { store } from '@/store';
    import CardComponent from './CardComponent.vue';
    export default {
        name: 'ItemListComponent',
        data(){
            return{
                store
        }
    },
    components:{
        CardComponent
    }
}
</script>

<style lang="scss" scoped>
    .db-debug{
        background-color: red;
    }
</style>