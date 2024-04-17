<template>
    <div>
        <CardComponent v-for="movie in store.movies" :title="movie.title" :originalTitle="movie.originalTitle"/>
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

</style>