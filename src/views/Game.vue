<template>
  <div id="game">
    <!-- bindamo vrijednosti koje želimo poslati u child komponentu za odgovarajući prop -->
    <EndGame v-if="prekidac" v-bind:niz="pogodci" v-bind:najvisePogodaka="najvisePogodaka" v-bind:dobitnaKombinacija="dobitnaKombinacija" />

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
      var niz = []; // Privremeni niz koji će sadržavati broj pogođenih brojeva za svaki tiket, respektivno po indeksu
      var max = 0; // Najviše pogodaka
      var self = this;
      var korNiz = this.userKombinacije;
      var dobNiz = this.dobitnaKombinacija;

      // Dodjeljujemo početne vrijednosti za 0 pogodaka, koje ćemo povećavati pri provjeri
      korNiz.forEach(function(){
        niz.push(0);
      });

      // Za svaku korisničku kombinaciju provjeravat ćemo da li ima jednu od vrijednosti iz dobitne kombinacije
      // Ukoliko ima povećavamo broj pogodaka u pomoćnom nizu broja sa indeksom tiketa kojeg provjeravamo
      korNiz.forEach(function(obj, indeks){
        dobNiz.forEach(function(broj){
          if(obj.komb.includes(broj)){
            niz[indeks]++;
          }
        });
        if(niz[indeks] > max)
          max = niz[indeks];
      });

      this.najvisePogodaka = max;

      // Uzimamo indeks iz pomoćnog niza svakog broja koji odgovara maksimalnom broju pogodaka
      // I šaljemo nizu objekata koji se sastoji iz dobitnih tiketa
      niz.forEach(function(broj, indeks){
        if(broj === max){
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
    padding-bottom: 14vh;
  }
</style>