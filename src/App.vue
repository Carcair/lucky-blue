<template>
  <div id="app">
    <Footer />
    <router-view/>
  </div>
</template>

<script>
import Footer from "./components/Footer";

export default {
  name: 'app',
  components: {
    Footer
  }
}
</script>

<style>
body {
  margin: 0; padding: 0;
  width: 100%; height: 100%;
  min-height: 650px;
  background: wheat;
  font-family: Arial, Helvetica, sans-serif;
  box-sizing: border-box;
  position: relative;
}
</style>