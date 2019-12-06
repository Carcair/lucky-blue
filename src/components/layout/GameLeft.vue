<template>
    <div id="left">
        <button id="get-tiket" v-if="!prekidac" v-on:click="changePrekidac()">Get Ticket</button>
        <div v-if="prekidac" v-on:click="changePrekidac()">
            <button id="esc">x</button>
            <br><br>
            <button class="btn" v-bind:key="broj" v-for="broj in nizBr">{{broj}}</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'GameLeft',
    data() {
        return {
            nizBr: [],
            prekidac: false,
        }
    },
    created() {
        for(let i = 1; i <= 48; i++){
            this.nizBr.push(i);
        }
    },
    methods: {
        changePrekidac() {
            this.prekidac = !this.prekidac;
        }
    }
}
</script>

<style scoped>
    #left {
        background-color: rgba(0, 128, 128, 0.5);
        padding: 10px 15px;
        box-sizing: border-box;
        width: 25vw;
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
        float: right;
    }

    #esc:hover, .btn:hover, #get-tiket:hover {
        background: bisque;
        color:black;
    }
</style>