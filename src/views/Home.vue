<template>
  <div class="home">
    <Header />
    <router-link to="/game"><img id="logo" src="../assets/LOGO.png" title="Play Lucky Blue"></router-link>
    <router-link to="/game"><img class="btn" src="../assets/PlayOrange.png" title="Play Lucky Blue"></router-link>
    <router-link to="/how-to"><img class="btn" src="../assets/HelpOrange.png" title="How to"></router-link>
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
  #logo {
    height: 35vh;
    display: block;
    margin: 2% auto;
  }

  .btn {
    display: block;
    height: 50px;
    margin: 2% auto; 
  }
</style>