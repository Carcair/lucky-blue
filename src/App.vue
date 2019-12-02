<template>
  <div>
    <Header />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";

export default {
  name: 'app',
  components: {
    Footer,
    Header,
  }
}
</script>

<style>
body {
  margin: 0; padding: 0;
  width: 100%; height: 100%;
  min-height: 650px; min-width: 400px;
  background: wheat;
  font-family: Arial, Helvetica, sans-serif;
  box-sizing: border-box;
  position: relative;
}
</style>