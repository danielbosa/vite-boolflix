<template>
    <div class="db-card">
        <img class="img-fluid" :src="`${ image }`">
        <div class="db-card-info text-center">
            <div class="db-card-title">
                    {{ title }}
            </div>
            <div>
                {{ originalTitle }}
            </div>
            <div>
                <span></span>
                {{ Math.ceil(vote) }}
            </div>
            <div>
                <img :src="`https://flagcdn.com/24x18/${language}.png`" :alt="`${language}`" @error="handleError">
                <span v-if="(!this.flagImage)">{{ language }}</span>
            </div>
        </div>
    </div>
</template>

<script>
    import { store } from '@/store';
    export default {
        name: 'CardComponent',
        props:['title', 'originalTitle', 'vote', 'language', 'image'],
        data(){
            return{
                store,
                flagImage: true,
        }
    },
    methods:{
        handleError(event){
            event.target.style.display = 'none';
            this.flagImage = false;
        },
        roundUp(num){
            Math.ceil(num);
        },
    }
}
</script>

<style lang="scss" scoped>
    .db-card{
        //width: calc(100% / 5 - 20px);
        width: 170px;
    }

    .db-card-title{
        font-weight: 900;
        text-transform: uppercase;
    }

    .db-card-info{
        border: 1px solid blue;
    }
</style>