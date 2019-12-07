<template>
    <div id="mid">
        <Bubanj />
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
    data() {
        return {

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