<template>
    <div id="mid">
        <Bubanj v-on:add-broj-bubanj="addBrojBubanj" />
        <Counter />
    </div>
</template>

<script>
import Counter from './../Counter.vue';
import Bubanj from './../Bubanj.vue';

export default {
    name: 'gameMid',
    components: {
        Counter,
        Bubanj
    },
    data: function(){
        return {
            zadnjiBr: ""
        }
    },
    methods: {
        addBrojBubanj: function(zadnjiBr){
            this.zadnjiBr = zadnjiBr;
            this.$emit('add-broj', zadnjiBr);
        }
    }
}
</script>

<style scoped>
    #mid {
        background-color: rgba(216, 191, 216, 0.5);
        box-sizing: border-box;
        width: 50vw; height: 100%;
        position: absolute;
        left: 25vw;
    }
</style>