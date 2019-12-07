<template>
  <div id="game">
    <game-left />
    <game-mid />
    <game-right />
  </div>
</template>

<script>
import GameLeft from './../components/layout/GameLeft.vue';
import GameMid from './../components/layout/GameMid.vue'
import GameRight from './../components/layout/GameRight.vue';

export default {
  name: 'game',
  components: {
    GameLeft,
    GameRight,
    GameMid
  },
  data() {
    return {
      objekt : {
        dobitnaKombinacija: [],
        userKombinacije: [],
        tiketi: 0,
        najvisePogodaka: 0,
        pogodci: [],
      },
    }
  },
}
</script>

<style scoped>
  #game {
    box-sizing: border-box;
    flex-direction: row;
    display: flex;
    flex-wrap: nowrap;
    min-height: 100vh;
    background-color: aliceblue;
    padding-bottom: 14vh;
  }
</style>