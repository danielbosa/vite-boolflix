<template>
    <section>
        <h3>{{title}}</h3>
        <div class="db-row">
            <CardComponent v-for="(item, index) in list" :key="index" :title="item.title" :originalTitle="item.originalTitle" :vote="item.vote" :language="item.language" :image="this.store.imageUrl+item.posterImage" :overview="item.overview"/>
        </div>
    </section>
    <!-- <section>
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
    </section> -->
</template>

<script>
    import { store } from '@/store';
    import CardComponent from './CardComponent.vue';
    export default {
        name: 'ItemListComponent',
        components:{
        CardComponent
    },
    props:{
        title: String,
        list: Array,
    },
        data(){
            return{
                store
        }
    },
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