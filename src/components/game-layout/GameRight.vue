<template>
    <div id="right">
        <button class="broj" v-bind:key="broj" v-for="broj in dobitnaKombinacija">{{broj}}</button>
    </div>
</template>

<script>
export default {
    name: 'gameRight',
    props: ['dobitnaKombinacija'],
}
</script>

<style scoped>
    #right {
        position: absolute;
        bottom: 10vh;
        text-align: center;
        width: 100vw;
    }

    .broj {
        box-sizing: border-box;
        background-image: radial-gradient(white, blue);
        border: 2px solid white;
        height: 7vh; width: 7vh;
        margin: 1vh 1vh 0 1vh;
        border-radius: 50%;
        font-size: 3vh;
    }

    .broj:hover {
        animation: pop 1s ease;
        -webkit-animation: pop 1s ease;
        animation-iteration-count: infinite;
    }
    @keyframes pop {
        0% {transform: scale(1)}
        50% {transform: scale(1.2)}
        100% {transform: scale(1)}
    }

    @media only screen and (max-width: 600px){
        #right {
            width: 20%; height: 85vh;
            margin: 0; padding-top: 40px;
            background: rgba(169, 169, 169, 0.7);
        }
        .broj {
            width: 10vw; height: 10vw; font-size: 3vh;
        }
    }
</style>