<template>
    <div class="about">
        <Header />
        <p>
            <span>Lucky Blue game</span><br><br>
            <span>Developed by:</span><br>
            <br>Dino Šahman
            <br>Haris Mahmutagić 
            <br>Mirza Bibić
            <br>Amar Mujkanović
            <br>Emrah Hadžišehić
            <br>Semra Smajlagić
            <br>Emir Obralić
            <br>Skender Međić
            <br>Emir Delić
        </p>
    </div>
</template>

<script>
import Header from './../components/layout/Header.vue';
export default {
    name: 'about',
    components: {
        Header
    }
}
</script>

<style scoped>
    .about p{
        width: 350px;
        display: block;
        margin: 0 auto;
        text-align: center;
        padding: 10px; margin-top: 7vh;
        line-height: 25px;
        background-color: rgba(169, 169, 169, 0.5);
        border-radius: 10px;
    }
    .about span{
        font-size: 32px;
    }
</style>