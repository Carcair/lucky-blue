<template>
    <div id="bubanj" v-on:click='startRoll'>
        <p id="broj">{{zadnjiBr}}</p>
    </div>
</template>

<script>

export default {
    name: 'bubanj',
    data() {
        return {
            zadnjiBr: "",
        }
    },
    created() {},
    methods: {
        startRoll() {
            var self = this;
            var roll = setInterval(function(){
                self.zadnjiBr = Math.floor(Math.random() * 47 + 1);
            }, 100);

            setTimeout(function(){
                clearInterval(roll);
            }, 7000);
        }
    }
}
</script>

<style scoped>
    div {
        background: tomato;
        height: 300px; width: 300px;
        border-radius: 50%;
        margin: 10% auto 0 auto;
        text-align: center;
        border: 2px dotted black;
        line-height: 200px;
    }
    #broj {
        font-size: 52px;
    }
</style>