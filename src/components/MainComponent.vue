<template>
    <div class="container">
        <ItemListComponent :title="'Film'" :list="this.store.movies"/>
        <ItemListComponent :title="'Serie TV'" :list="this.store.tvSeries"/>
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
}
</script>

<style lang="scss" scoped>
@use '../../src/assets/styles/partials/variables' as *;
div{
    margin-top: 50px;
}
</style>