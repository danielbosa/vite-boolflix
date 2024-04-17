<template>
    <div id="header">
        <div id="logo">
            boolflix
        </div>
        <div>
            <input type="text" placeholder="Cerca un film" v-model="store.searchWord"  @keyup.enter="$emit('searchWord')">
            <button @click="$emit('searchWord')">CERCA</button>
        </div>
        
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
@use '../../src/assets/styles/partials/variables' as *;
#header{
    background-color: $dark;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
}

#logo{
    text-transform: uppercase;
    font-size: 1.5rem;
    font-weight: 900;
    color: $highlight;
}

</style>