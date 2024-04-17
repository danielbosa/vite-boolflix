<template>
    <div class="db-card">
        <img class="img-fluid">
        <div class="db-card-info text-center">
            <br>
            <div class="db-card-title">
                    {{ title }}
            </div>
            <br>
            <div>
                {{ originalTitle }}
            </div>
            <br>
        </div>
    </div>
</template>

<script>
    import { store } from '@/store';
    export default {
        name: 'CardComponent',
        props:['title', 'originalTitle', 'vote', 'language'],
        data(){
            return{
                store
        }
    }
}
</script>

<style lang="scss" scoped>
    .db-card{
        //width: calc(100% / 5 - 20px);
        width: 170px;
    }

    .db-card-title{
        color: white;
        font-weight: 900;
        text-transform: uppercase;
    }

    .db-card-info{
        background-color: blue;
        height: 150px;
    }
</style>