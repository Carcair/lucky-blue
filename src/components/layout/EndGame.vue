<template>
    <div id="end-game">
        <div class="dobitak" v-bind:key="tiket" v-for="tiket in niz">
            <p>Broj tiketa: {{tiket.brTiketa}}</p>
            <button class="broj" v-bind:key="'A'+broj" v-for="broj in tiket.komb">{{broj}}</button>
            <hr>
        </div>
    </div>
</template>

<script>

export default {
    name: 'endGame',
    props: ['niz']
}
</script>

<style scoped>
    #end-game {
        background: tomato;
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

    .dobitak {
        width: 100vw;
        text-align: center;
    }
</style>