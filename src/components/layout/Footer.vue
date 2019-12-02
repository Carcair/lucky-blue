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
        background: cornflowerblue;
        border: 1px solid black;
        position: absolute;
        height: 100px; width: 100%;
        bottom: 0;
        text-align: center;
    }
    .footer p {
        margin: 40px 0 0 0; padding: 0;
    }
</style>