<template>
  <div id="game">
    <EndGame v-if="prekidac" v-bind:niz="pogodci" />
    <div v-else>
      <GameLeft v-on:add-komb="addKomb" />
      <GameMid v-on:add-broj="addBroj" />
      <GameRight v-bind:dobitnaKombinacija="dobitnaKombinacija" />
    </div>
  </div>
</template>

<script>
import GameLeft from './../components/layout/GameLeft.vue';
import GameMid from './../components/layout/GameMid.vue';
import GameRight from './../components/layout/GameRight.vue';
import EndGame from './../components/layout/EndGame.vue';

export default {
  name: 'Game',
  components: {
    GameLeft,
    GameRight,
    GameMid,
    EndGame
  },
  data: function() {
    return {
      dobitnaKombinacija: [],
      userKombinacije: [],
      tiketi: 0,
      najvisePogodaka: 0,
      pogodci: [],
      prekidac: false,
    }
  },
  created() {
    var self = this;
    this.tiketi = this.userKombinacije.length;

    setTimeout(function() {
      self.getRezultat();
      self.prekidac = !self.prekidac;
    }, 120000);
  },
  methods: {
    addKomb: function(newKomb) {
      this.userKombinacije.push(newKomb);
    },
    addBroj: function(broj) {
      this.dobitnaKombinacija.push(broj);
    },

    // Tražimo pogođene brojeve
    getRezultat: function() {
      var niz = [];
      var max = 0;
      var self = this;
      var korNiz = this.userKombinacije;
      var dobNiz = this.dobitnaKombinacija;

      for(let i = 0; i < korNiz.length; i++){
        let temp = {};
        temp.brojPog = 0;
        temp.komb = [];
        niz.push(temp);
      }

      for(let i = 0; i < korNiz.length; i++){
        for(let j = 0; j < dobNiz.length; j++){
          if(korNiz[i].komb.includes(dobNiz[j])){
            niz[i].brojPog++;
            niz[i].komb.push(dobNiz[j]);
          }
        }
        if(niz[i].brojPog > max){
          max = niz[i].brojPog;
        }
      }
      this.najvisePogodaka = max;

      niz.forEach(function(obj, indeks){
        if(obj.brojPog === max){
          self.pogodci.push(self.userKombinacije[indeks]);
        }
      });
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