<template>
    <div id="left">
        <button id="get-tiket" v-if="!prekidac" v-on:click="changePrekidac()">Get Ticket</button>
        <div v-if="prekidac">
            <button id="esc" v-on:click="changePrekidac()">x</button>
            <br><br>
            <button class="btn" v-bind:key="broj" v-for="broj in nizBr">{{broj}}</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'gameLeft',
    data() {
        return {
            nizBr: [],
            prekidac: false,
        }
    },
    props: [],
    created() {
        for(let i = 1; i <= 48; i++){
            this.nizBr.push(i);
        }
    },
    methods: {
        changePrekidac() {
            this.prekidac = !this.prekidac;
        },

    }
}
</script>

<style scoped>
    #left {
        background-color: rgba(0, 128, 128, 0.5);
        padding: 10px 15px;
        box-sizing: border-box;
        min-width: 25vw; height: 100%;
        text-align: center;
        position: absolute;
        z-index: 1;
    }

    button {
        cursor: pointer;
    }

    #esc {
        border: none;
        color: white; background-color: rgba(255, 0, 0, 0.5);
        border-radius: 50%;
        padding: 4px 8px;
        float:right;
        font-weight: bold;
    }

    .btn {
        border: none;
        box-sizing: border-box;
        background-image: radial-gradient(white, gray);
        border: 2px solid white;
        height: 40px; width: 40px;
        margin: 5px;
        border-radius: 50%;
    }

    #get-tiket {
        background-color: coral;
        font-size: 24px;
        border: none;
        border-radius: 25px;
        width: 150px;
        margin-top: 50%;
    }

    #esc:hover, .btn:hover, #get-tiket:hover {
        background: bisque;
        color:black;
    }
</style>