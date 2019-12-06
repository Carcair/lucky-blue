<template>
    <div id="left">
        <button id="esc">x</button>
        <br>
        <button class="btn" v-bind:key="broj" v-for="broj in nizBr">{{broj}}</button>
    </div>
</template>

<script>
export default {
    name: 'GameLeft',
    data() {
        return {
            nizBr: []
        }
    },
    created() {
        for(let i = 1; i <= 48; i++){
            this.nizBr.push(i);
        }
    }
}
</script>

<style scoped>
    #left {
        height: 100%; width: 25vw;
        background-color: rgba(0, 128, 128, 0.5);
        padding: 10px 15px;
        box-sizing: border-box;
        float: left;
    }
    #esc {
        border: none;
        color: white; background-color: rgba(255, 0, 0, 0.5);
        border-radius: 50%;
        padding: 5px 10px;
    }

    .btn {
        border: none;
        background-color: crimson;
        height: 50px; width: 50px;
        border-radius: 50%;
    }
</style>