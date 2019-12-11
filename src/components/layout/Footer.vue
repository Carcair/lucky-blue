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
        background-color: rgba(255, 165, 0, 0.5);
        height: 15vh; width: 100%;
        bottom: 0;
        text-align: center;
        position: fixed;
        z-index: 2;
    }
    .footer p {
        margin: 40px 0 0 0; padding: 0;
    }
</style>