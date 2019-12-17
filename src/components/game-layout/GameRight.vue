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
        background-color: rgba(169, 169, 169, 0.1);
        box-sizing: border-box;
        width: 25vw; height: 100%;
        right: 0;
        position: absolute;
        text-align: center;
        padding-top: 100px;
    }

    .broj {
        box-sizing: border-box;
        background-image: radial-gradient(white, blue);
        border: 2px solid white;
        height: 5vw; width: 5vw;
        margin: 5px;
        border-radius: 50%;
        font-size: 3vw;
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