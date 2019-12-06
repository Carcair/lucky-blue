<template>
  <div>
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/layout/Footer";

export default {
  name: 'app',
  components: {
    Footer,
  }
}
</script>

<style>
body {
  margin: 0; padding: 0;
  width: 100%;
  min-height: 100vh; min-width: 400px;
  background: wheat;
  font-family: Arial, Helvetica, sans-serif;
  box-sizing: border-box;
  position: relative;
}
</style>