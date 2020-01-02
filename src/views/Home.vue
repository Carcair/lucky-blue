<template>
  <div class="home">
    <Header />
    <div class="container">
      <router-link to="/game"><img id="logo" class="pop" src="../assets/LOGO.png" title="Play Lucky Blue"></router-link>
      <router-link to="/game"><img class="btn pop" src="../assets/PlayOrange.png" title="Play Lucky Blue"></router-link>
      <router-link to="/how-to"><img class="btn pop" src="../assets/HelpOrange.png" title="How to"></router-link>
    </div>
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
  .home {
    width: 100vw;
  }

  .container {
    display: grid;
    grid-template-rows: 40vh 15vh 15vh;
    align-content: space-around;
  }

  #logo {
    height: 25vh; width: 20vh;
    display: block;
    margin: 5% auto;
  }

  .btn {
    height: 8vh;
    display: block;
    margin: 0% auto; 
  }
  
  .pop:hover {
    animation: pop 1s ease;
  }

  @keyframes pop {
    0% {transform: scale(1)}
    50% {transform: scale(1.2)}
    100% {transform: scale(1)}
  }

  @media only screen and (max-width: 600px){
    #logo {
      width: 90vw;
    }
  }
</style>