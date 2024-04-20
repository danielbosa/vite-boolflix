<template>
    <div id="header">
        <div id="logo">
            boolflix
        </div>
        <ul>
            <li @click="$emit('home')">Home</li>
            <li>Movies</li>
            <li>Series</li>
            <li>Logout</li>
            <!-- torna la login page dove selezionare account -->
        </ul>
        <div>
            <input type="text" placeholder="Cerca un film" v-model.trim="store.options.params.query"
                @keyup.enter="$emit('searchWord')">
            <button @click="$emit('searchWord')">CERCA</button>
        </div>

    </div>
</template>

<script>
import { store } from '@/store';
export default {
    name: 'HeaderComponent',
    data() {
        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../../src/assets/styles/partials/variables' as *;

#header {
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
    z-index: 9000;
}

#logo {
    text-transform: uppercase;
    font-size: 1.5rem;
    font-weight: 900;
    color: $highlight;
}

ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
    li {
        padding: 5px 5px;
        cursor: pointer;
        color: $main;
        &:hover{
            color: $secondary;
            font-weight: bold;
        }
    }
}
</style>