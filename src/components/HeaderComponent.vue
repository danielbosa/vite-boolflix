<template>
    <div>
        <input type="text" placeholder="Cerca un film" v-model="store.searchWord"  @keyup.enter="$emit('searchWord')">
        <button @click="$emit('searchWord')">CERCA</button>
    </div>
</template>

<script>
import { store } from '@/store';
    export default {
        name: 'HeaderComponent',
        data(){
            return{
                store
        }
    }
}
</script>

<style lang="scss" scoped>

</style>