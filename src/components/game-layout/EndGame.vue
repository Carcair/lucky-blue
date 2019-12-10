<template>
    <div id="end-game">
        <Header />
        <div id="komb">
            <p>Kombinacija igre je:</p>
            <button class="brojD" v-bind:key="'B' + broj" v-for="broj in dobitnaKombinacija">{{broj}}</button>
            <hr>
        </div>

        <div class="a" v-if="!niz.length">Nema dobitaka!!!</div>

        <div class="a" v-else>Najviše pogodaka: {{najvisePogodaka}}</div><hr>

        <div class="dobitak" v-bind:key="tiket.brTiketa" v-for="tiket in niz">
            <p>Broj tiketa: {{tiket.brTiketa}}</p>
            <button class="broj" v-bind:key="'A' + broj" v-for="broj in tiket.komb">{{broj}}</button>
            <hr>
        </div>
    </div>
</template>

<script>
import Header from './../layout/Header';

export default {
    name: 'endGame',
    components: {
        Header
    },
    props: ['niz', 'najvisePogodaka', 'dobitnaKombinacija']
}
</script>

<style scoped>
    .a {
        width: 100vw;
        line-height: 100px;
        text-align: center;
        font-size: 48px;
    }
    
    .broj {
        border: none;
        box-sizing: border-box;
        background-image: radial-gradient(white, blue);
        border: 2px solid white;
        height: 40px; width: 40px;
        margin: 5px;
        border-radius: 50%;
    }
    .brojD {
        border: none;
        box-sizing: border-box;
        background-image: radial-gradient(white, crimson);
        border: 2px solid white;
        height: 40px; width: 40px;
        margin: 5px;
        border-radius: 50%;
    }

    .dobitak, #komb {
        width: 100vw;
        text-align: center;
    }
</style>