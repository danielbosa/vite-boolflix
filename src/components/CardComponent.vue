<template>
    <div class="flip-card db-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img class="img-fluid db-poster" :src="`${image}`" :alt="`${title}`" @error="handleImgError">
                <img class="img-fluid db-poster" v-if="this.errorImage" src="https://lab.csschopper.com/placeholder/images/placeholder_image_logo.png" :alt="`${title}`">
            </div>
            <div class="flip-card-back">
                <div>
                    <div class="db-card-title">{{ title }}</div>
                    <div>{{ originalTitle }}</div>
                    <div>
                        <img :src="`https://flagcdn.com/24x18/${language}.png`" :alt="`${language}`"
                            @error="handleError">
                        <span v-if="(!this.flagImage)">{{ language }}</span>
                    </div>
                    <div>
                        <i :class="{ 'fa-solid': n <= roundVote, 'fa-regular': n > roundVote }" class="fa-star"
                            v-for="n in 5"></i>
                    </div>
                    <p>{{ overview }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '@/store';
export default {
    name: 'CardComponent',
    props: ['title', 'originalTitle', 'vote', 'language', 'image', 'overview'],
    data() {
        return {
            store,
            flagImage: true,
            errorImage: false,
            roundedVote: 0,
        }
    },
    methods: {
        handleError(event) {
            event.target.style.display = 'none';
            this.flagImage = false;
        },
        handleImgError(event){
            event.target.style.display = 'none';
            this.errorImage = true;
        }
    },
    computed: {
        roundVote() {
            return Math.ceil(this.vote / 2)
        }
    },
}
</script>

<style lang="scss" scoped>
@use '../../src/assets/styles/partials/variables' as *;

.db-card-title {
    font-weight: 900;
    text-transform: uppercase;
}

.fa-star {
    color: gold;
}

.flip-card {
    aspect-ratio: 1 / 1.5;
    width: calc(100% / 4 - 20px);
    background-color: transparent;
    perspective: 1000px;

    .flip-card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.8s;
        transform-style: preserve-3d;
    }
    &:hover .flip-card-inner{
        transform: rotateY(180deg);
        cursor: pointer;
    }
}

.flip-card-front,
.flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
}

.flip-card-front{
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

.flip-card-back {
    background-color: $dark;
    color: $main;
    padding: 20px;
    transform: rotateY(180deg);
    overflow-y: auto;
    overflow-x: hidden;
    
}

/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px $secondary;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: $main;
  border-radius: 10px;
}

</style>