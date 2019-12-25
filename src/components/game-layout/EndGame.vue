<template>
    <div id="end-game" v-animate-css="'slideInLeft'">
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
    // prvi korak kod propova, inicijaliziramo im imena ovdje
    // onda ih u parent elementu koristimo kao atribute html tagova
    props: ['niz', 'najvisePogodaka', 'dobitnaKombinacija']
}
</script>

<style scoped>
    .a {
        width: 100vw;
        text-align: center;
        font-size: 4vh;
    }

    p {font-size: 4vh;}
    
    .broj {
        box-sizing: border-box;
        background-image: radial-gradient(white, blue);
        border: 2px solid white;
        width: 7vh; height: 7vh; font-size: 3vh;
        margin: 5px;
        border-radius: 50%;
    }
    .brojD {
        box-sizing: border-box;
        background-image: radial-gradient(white, crimson);
        border: 2px solid white;
        width: 7vh; height: 7vh; font-size: 3vh;
        margin: 5px;
        border-radius: 50%;
    }

    .dobitak, #komb {
        width: 100vw;
        text-align: center;
    }
</style>