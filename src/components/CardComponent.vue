<template>
    <div class="db-card">
        <img class="img-fluid db-poster" :src="`${image}`" :alt="`${title}`">
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

    <!-- <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img class="img-fluid db-poster" :src="`${image}`" :alt="`${title}`">
            </div>
            <div class="flip-card-back">
                <div>Titolo: {{ title }}</div>
                <div>Titolo originale: {{ originalTitle }}</div>
                <div>
                    Voto:
                    <span v-for="n in this.starsVoteArray()">
                        <i class="fa-solid fa-star"></i>
                    </span>
                    <span v-for="n in (5 - this.starsVoteArray().length)">
                        <i class="fa-regular fa-star"></i>
                    </span>
                </div>
                <div>Riassunto: {{ overview }}</div>
            </div>
        </div>
    </div> -->
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
            roundedVote: 0,
        }
    },
    methods: {
        handleError(event) {
            event.target.style.display = 'none';
            this.flagImage = false;
        },
        starsVoteArray() {
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
.db-card {
    width: calc(100% / 5 - 20px);
    //width: 170px;
}

.db-poster {
    height: 352px;
}

.db-card-title {
    font-weight: 900;
    text-transform: uppercase;
}

.db-card-info {
    border: 1px solid blue;
    //height: 150px;
}

/* The flip card container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
.flip-card {
  background-color: transparent;
  width: 300px;
  height: 200px;
  border: 1px solid #f1f1f1;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
}

/* This container is needed to position the front and back side */
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
  background-color: #bbb;
  color: black;
}

/* Style the back side */
.flip-card-back {
  background-color: dodgerblue;
  color: white;
  transform: rotateY(180deg);
}


</style>