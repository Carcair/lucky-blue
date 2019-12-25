<template>
    <div class="footer">
        <p>Developed by @SPARK team ED</p>
    </div>
</template>

<script>
export default {
    name: "Footer",
}
</script>

<style scoped>
    .footer {
        box-sizing: border-box;
        height: 10vh; width: 100%;
        bottom: 0;
        text-align: center;
        position: fixed;
        z-index: 2;
        background-color: rgba(169, 169, 169, 0.4);
    }
    .footer p {
        margin: 4vh 0 0 0; padding: 0;
        font-size: 2vh;
    }

    @media (orientation: landscape) {
        .footer p {font-size: 3vh;}
    }
</style>