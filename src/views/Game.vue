<template>
  <div id="game">
    <GameLeft v-on:add-komb="addKomb" />
    <GameMid v-on:add-broj="addBroj" />
    <GameRight />
  </div>
</template>

<script>
import GameLeft from './../components/layout/GameLeft.vue';
import GameMid from './../components/layout/GameMid.vue'
import GameRight from './../components/layout/GameRight.vue';

export default {
  name: 'Game',
  components: {
    GameLeft,
    GameRight,
    GameMid
  },
  data: function() {
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
  methods: {
    addKomb: function(newKomb) {
      this.objekt.userKombinacije.push(newKomb);
    },
    addBroj: function(broj) {
      this.objekt.dobitnaKombinacija.push(broj);
    }
  }
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