<template>
    <div>
        <ItemListComponent/>
    </div>
</template>

<script>
    import { store } from '@/store';
    import ItemListComponent from './ItemListComponent.vue';
    export default {
        name: 'MainComponent',
        data(){
            return{
                store
        }
    },
    components:{
        ItemListComponent,
    },
}
</script>

<style lang="scss" scoped>

</style>