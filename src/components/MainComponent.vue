<template>
    <div v-if="this.store.search = false">
        <ItemListComponent v-for="(item, index) in list" :key="index" :title="item.title" :list="item.collection"/>
        <!-- <ItemListComponent :title="this.store.movies.title" :list="this.store.movies.collection"/>
        <ItemListComponent :title="this.store.tvSeries.title" :list="this.store.tvSeries.collection"/>
        <ItemListComponent :title="'Most popular movies now'" :list="this.store.popularMovies"/>
        <ItemListComponent :title="'Trending TV Series'" :list="this.store.popularTvSeries"/> -->
    </div>
    <div v-else>
        <ItemListComponent v-for="(item, index) in list" :key="index" :title="item.title" :list="item.collection"/>
        <!-- <ItemListComponent :title="this.store.movies.title" :list="this.store.movies.collection"/>
        <ItemListComponent :title="this.store.tvSeries.title" :list="this.store.tvSeries.collection"/>
        <ItemListComponent :title="'Most popular movies now'" :list="this.store.popularMovies"/>
        <ItemListComponent :title="'Trending TV Series'" :list="this.store.popularTvSeries"/> -->
    </div>
</template>

<script>
    import { store } from '@/store';
    import ItemListComponent from './ItemListComponent.vue';
    export default {
        name: 'MainComponent',
        components:{
        ItemListComponent,
    },
        data(){
            return{
                store
        }
    },
    props:{
        title: String,
        list: Array,
    },
    computed:{
        // emptyList(){
        //     if(this.store.movies){
        //         return true
        //     }
        // },
    }
}
</script>

<style lang="scss" scoped>
@use '../../src/assets/styles/partials/variables' as *;

div{
    margin-top: 50px;
    background-color: $secondary;
}
</style>