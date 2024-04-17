<template>
    <section>
        <h3>FILM</h3>
        <div class="db-row">
            <CardComponent v-for="movie in store.movies" :title="movie.title" :originalTitle="movie.originalTitle" :vote="movie.vote" :language="movie.language" :image="this.store.imageUrl+movie.posterImage" :overview="movie.overview"/>
        </div>
    </section>
    <section>
        <h3>SERIE TV</h3>
        <div class="db-row">
            <CardComponent v-for="tv in store.tvSeries" :title="tv.title" :originalTitle="tv.originalTitle" :vote="tv.vote" :language="tv.language" :image="this.store.imageUrl+tv.posterImage" :overview="tv.overview"/>
        </div>
    </section>
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

    .db-row{
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        
    }

</style>