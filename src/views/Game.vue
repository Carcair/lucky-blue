<template>
  <div id="game">
    <EndGame v-if="prekidac" v-bind:niz="pogodci" />
    <div v-else>

      <!-- Funkcija addKomb će se pokrenuti sa eventom add-komb pokrenut u GameLeft.vue iz uzet će vrijednost proslijeđenu u njemi -->
      <GameLeft v-on:add-komb="addKomb" />

      <!-- Funkcija addBroj se pokreće sa eventom add-broj iz komp GameMid.vue i uzima proslijeđenu vrijednost -->
      <GameMid v-on:add-broj="addBroj" />

      <!--  -->
      <GameRight v-bind:dobitnaKombinacija="dobitnaKombinacija" />
    </div>
  </div>
</template>

<script>
import GameLeft from './../components/game-layout/GameLeft.vue';
import GameMid from './../components/game-layout/GameMid.vue';
import GameRight from './../components/game-layout/GameRight.vue';
import EndGame from './../components/game-layout/EndGame.vue';

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

    // Broj tiketa je određen veličinom niza objekata userKombinacije
    this.tiketi = this.userKombinacije.length;

    // Nakon 3 minute (180 sek) pokrenut će se funkcija getRezultat i promjeniti prekidac u false
    setTimeout(function() {
      self.getRezultat();
      self.prekidac = !self.prekidac;
    }, 180000);
  },
  methods: {

    // Uzima objekt koji sadrži i broj tiketa i kombinaciju, formira userKombinacije
    addKomb: function(newKomb) {
      this.userKombinacije.push(newKomb);
    },

    // Dodaje brojeve u niz dobitnaKombinacija
    addBroj: function(broj) {
      this.dobitnaKombinacija.push(broj);
    },

    // Tražimo pogođene brojeve
    getRezultat: function() {
      var niz = []; // Privremeni niz koji će sadržavati svaki tiket sa njihovim brojem pogođenih brojeva
      var max = 0; // Najviše pogodaka
      var self = this;
      var korNiz = this.userKombinacije;
      var dobNiz = this.dobitnaKombinacija;

      korNiz.forEach(function(){
        let temp = {};
        temp.brojPog = 0;
        temp.komb = [];
        niz.push(temp);
      });

      korNiz.forEach(function(obj, i){
        dobNiz.forEach(function(broj){
          if(obj.komb.includes(broj)){
            niz[i].brojPog++;
            niz[i].komb.push(broj);
          }
        });
        if(niz[i].brojPog > max)
          max = niz[i].brojPog;
      });
      
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