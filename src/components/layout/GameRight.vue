<template>
    <div id="right">
        <button class="broj" v-bind:key="broj" v-for="broj in objekt.dobitnaKombinacija">{{broj}}</button>
    </div>
</template>

<script>
export default {
    name: 'gameRight',
    props: ['objekt'],
}
</script>

<style scoped>
    #right {
        background: salmon;
        box-sizing: border-box;
        width: 25vw; height: 100%;
        right: 0;
        position: absolute;
        text-align: center;
        padding-top: 100px;
    }

    .broj {
        background: radial-gradient(white, blue);
        border: 2px solid white;
        margin: 15px; padding: 10px;
        border-radius: 50%;
    }
</style>