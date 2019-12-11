<template>
    <div id="left">

        <!-- ako je kraj == true pokazati će ovaj div -->
        <div v-if="kraj">

            <button id="get-tiket" v-if="prekidac" v-on:click="changePrekidac()">Get Ticket</button>
            <div  v-else>
                <button id="esc" v-on:click="changePrekidac()">x</button>
                <br><br>

                <!-- pravi button za svaki element u nizBr, element u ovom slučaju nazivamo broj i uzimamo njegovu vrijednost i ispisujemo unutar buttona -->
                <button class="btn" v-on:click="getBroj(broj)" v-bind:key="broj" v-for="broj in nizBr">{{broj}}</button>
                
                <hr>
                <!-- pravi button za svaki element (kojeg smo ovdje nazvali brojKomb) u nizu komb i ispisuje njegovu vrijednost -->
                <button class="btn-izabrani" v-bind:key="'A' + brojKomb" v-for="brojKomb in komb" disabled>{{brojKomb}}</button>
            </div>
        </div>

        <!-- ako je kraj == false -->
        <p v-else>Ne možete više birati tikete</p>
        <p>Broj tiketa: {{tiketi-1}}</p>
    </div>
</template>

<script>
export default {
    name: 'gameLeft',
    data: function() {
        return {
            nizBr: [], // niz brojeva od kojih ćemo birati naše brojeve, bit će od 1-48, definisan u created
            komb: [], // privremeni niz kombinacija
            tiketi: 1, // broj tiketa koji je slijedeći
            prekidac: true, // prekidac s kojim otvaramo ili zatvaramo prozor za biranje tiketa
            kraj: true, // prekidac koji oznacava kraj perioda za biranje tiketa
        }
    },
    created: function() {

        // kada koristimo setTimeout i setInterval funkcije, ukoliko se želimo pozvati na neku varijablu
        // koja pripada našoj komponenti, ne možemo više koristiti this., jer se u tom slučaju .this
        // više ne odnosi na našu komponentu nego na funkcije setTimeout i setInterval
        // tada pravimo neku proizvoljnu varijablu IZVAN setTimeout/setInterval i dodijeljujemo joj
        // vrijednost "this"

        var self = this;
        for(let i = 1; i <= 48; i++){
            self.nizBr.push(i);
        }

        // Nakon određenog vremena (120 sekundi u našem slučaju) završavamo sa biranjem tiketa

        setTimeout(function() {
            self.kraj = false;
        }, 120000);
        
    },
    methods: {
        changePrekidac: function(){

            // Prekidač koji s kojim otvaramo prozor kad biramo brojeve za tiket
            // True bit će prikazan, false nećemo ga viditi
            // U slučaju ako je false sa this.komb = [] praznimo niz tako da nam ne ostaju brojevi
            // koje smo možda već unijeli, odn. prekidamo unost

            if(this.prekidac == false){
                this.komb = [];
            }

            // Mjenjamo prekidac

            this.prekidac = !this.prekidac;
        },

        // Metodu getBroj koristimo za unost brojeva u tiket kada kliknemo na button koji smo
        // definisali u template-u, uzima za vrijednost vrijednost koja se nalazi u njemu

        getBroj: function(x){

            // Provjeravamo da li smo taj broj već kliknuli, ako jesmo ništa se neće desiti
            
            if(!this.komb.includes(x)){
                this.komb.push(x);
                var newKomb = {
                    brTiketa: this.tiketi,
                    komb: this.komb,
                };
                if(this.komb.length == 7){
                    this.komb = [];
                    this.tiketi++;
                    this.$emit('add-komb', newKomb);
                    this.prekidac = !this.prekidac;
                }
            }
        }

    }
}
</script>

<style scoped>
    #left {
        background-color: rgba(169, 169, 169, 0.1);
        padding: 10px 15px;
        box-sizing: border-box;
        min-width: 25vw; height: 100%;
        text-align: center;
        position: absolute;
        z-index: 1;
    }

    button {
        cursor: pointer;
    }

    #esc {
        border: none;
        color: white; background-color: rgba(255, 0, 0, 0.5);
        border-radius: 50%;
        padding: 4px 8px;
        float:right;
        font-weight: bold;
    }

    .btn {
        border: none;
        box-sizing: border-box;
        background-image: radial-gradient(white, gray);
        border: 2px solid white;
        height: 40px; width: 40px;
        margin: 5px;
        border-radius: 50%;
    }

    #get-tiket {
        background-color: coral;
        font-size: 24px;
        border: none;
        border-radius: 25px;
        width: 150px;
        margin-top: 20%;
    }

    #esc:hover, .btn:hover, #get-tiket:hover {
        background: bisque;
        color:black;
    }

    .btn-izabrani {
        border: none;
        box-sizing: border-box;
        background-image: radial-gradient(white, blue);
        color: black;
        border: 2px solid white;
        height: 40px; width: 40px;
        margin: 5px;
        border-radius: 50%;
    }
</style>