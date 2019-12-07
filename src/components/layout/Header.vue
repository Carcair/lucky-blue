<template>
    <div class="header">
        <router-link to="/about"><button>About</button></router-link>
        <router-link to="/"><button>Home</button></router-link>
        <img src="../../assets/LOGO.png" />
    </div>
</template>

<script>
export default {
    name: 'header'
}
</script>

<style scoped>
    .header {
        height: 15vh; width: 100%;
        background: cornflowerblue;
        margin: 0;
        padding: 25px 0 0 15px;
        box-sizing: border-box;
        border: 1px solid black;
    }

    .header button {
        margin: 0 15px 0 0;
        padding: 15px;
        float: right;
        border: 1px solid black;
        background: gray;
    }

    .header button:hover {
        background: darkgray;
    }

    .header img {
        height: 50px;
        margin: 0;
    }
</style>