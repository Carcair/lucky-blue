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
* {font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;}
body {
  margin: 0; padding: 0;
  background-image: url("./assets/PodlogaL.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  background-attachment: fixed;
  font-family: Arial, Helvetica, sans-serif;
  box-sizing: border-box;
  position: relative;
}
@media only screen and (max-width: 600px){
  body {
    background-image: url("./assets/PodlogaP.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100vw 100vh;
    background-attachment: fixed;
  }
}
</style>