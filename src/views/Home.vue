<template>
  <div class="home">
    <Header />
    <router-link to="/game"><img src="../assets/LOGO.png" title="Lucky Blue"></router-link>
  </div>
</template>

<script>
import Header from './../components/layout/Header.vue';
export default {
  name: 'home',
  components: {
    Header
  }
}
</script>

<style scoped>
  .home img {
    height: 200px;
    display: block;
    margin: 10% auto;
  }
</style>