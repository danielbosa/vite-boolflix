<template>
    <div class="jumbotron">
    <div class="video-container">
        <!-- Codice di embed di YouTube -->
        <iframe width="560" height="315" src="https://www.youtube.com/embed/YQeUmSD1c3g?si=YxsYtb97fYIDn2cl?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
</div>
</template>

<script>
import { store } from '@/store';
export default {
    name: 'Jumbo',
    data() {
        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped>
.jumbotron {
    position: relative;
    width: 100%;
    height: 400px; /* Altezza desiderata del jumbotron */
    overflow: hidden;
    background-color: #000; /* Colore di sfondo opzionale */
}

.video-container {
    position: relative; /* Modificato da absolute a relative */
    width: 100%;
    height: 100%;
}

.video-container iframe {
    width: 100%;
    height: 100%;
    border: 0;
}
</style>