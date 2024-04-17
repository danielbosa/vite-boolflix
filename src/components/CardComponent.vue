<template>
    <div class="db-card">
        <img class="img-fluid" :src="`${ image }`" :alt="`${ title }`">
        <div class="db-card-info text-center">
            <div class="db-card-title">
                    {{ title }}
            </div>
            <div>
                {{ originalTitle }}
            </div>
            <div>
                <span v-for="n in this.starsVoteArray()">
                    <i class="fa-solid fa-star"></i>
                </span>
                <span v-for="n in (5 - this.starsVoteArray().length)">
                    <i class="fa-regular fa-star"></i>
                </span>
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
                roundedVote: 0,
        }
    },
    methods:{
        handleError(event){
            event.target.style.display = 'none';
            this.flagImage = false;
        },
        starsVoteArray(){
            let stars = [];
            const roundedVote = Math.ceil(this.vote / 2);
            for (let index = 0; index < roundedVote; index++) {
                stars.push(index);
            }
            return stars
        },
    }
}
</script>

<style lang="scss" scoped>
    .db-card{
        width: calc(100% / 5 - 20px);
        //width: 170px;
    }

    .db-card-title{
        font-weight: 900;
        text-transform: uppercase;
    }

    .db-card-info{
        border: 1px solid blue;
    }
</style>