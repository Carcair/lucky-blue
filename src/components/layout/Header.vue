<template>
    <div class="header">
        <router-link to="/about"><button>About</button></router-link>
        <router-link to="/"><button>Home</button></router-link>
        <img src="../../assets/LOGO.png" />
    </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped>
    .header {
        height: 15vh; width: 100%;
        margin: 0;
        padding: 25px 0 0 15px;
        box-sizing: border-box;
        background-color: rgba(169, 169, 169, 0.4);
    }

    .header button {
        margin: 0 15px 0 0;
        padding: 15px;
        float: right;
        border: none; border-radius: 15%;
        background-color: rgb(230, 154, 13);
    }

    .header button:hover {
        background: darkgray;
    }

    .header img {
        height: 50px;
        margin: 0;
    }
</style>