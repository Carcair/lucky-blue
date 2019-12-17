<template>
    <div id="left" v-animate-css="'slideInLeft'">

        <!-- ako je kraj == true pokazati će ovaj div, kada bude kraj == false, to znači da ne možemo više unositi tikete, odn. počela je igra -->
        <div v-if="kraj">

            <!-- prekidac je varijabla pomoću koje ćemo prikazati ili sakriti prozor sa brojevima
            prekidac je true na početku, false kada kliknemo na Get Ticket i opet true kada kliknemo
            na "x" button -->
            <transition name="custom-classes-transition" enter-active-class="animated slideInLeft" leave-active-class="animated slideOutLeft" mode="out-in">
                <button  id="get-tiket" v-if="prekidac" v-on:click="changePrekidac()">Get Ticket</button>
            

                <div v-else id="tiket">
                    <button id="esc" v-on:click="changePrekidac()">x</button>
                    <br><br>

                    <!-- pravi button za svaki element u nizBr, element u ovom slučaju nazivamo broj i uzimamo njegovu vrijednost i ispisujemo unutar buttona -->
                    <button class="btn" v-on:click="getBroj(broj)" v-bind:key="broj" v-for="broj in nizBr">{{broj}}</button>
                    
                    <hr>
                    <!-- pravi button za svaki element (kojeg smo ovdje nazvali brojKomb) u nizu komb i ispisuje njegovu vrijednost -->
                    <button class="btn-izabrani" v-bind:key="'A' + brojKomb" v-for="brojKomb in komb" disabled>{{brojKomb}}</button>
                </div>
            </transition>
        </div>

        <!-- ako je kraj == false -->
        <p v-else>Ne možete više birati tikete</p>
        <p v-if="prekidac">Broj tiketa: {{tiketi-1}}</p>
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
            self.prekidac = true;
        }, 120000);
    },
    methods: {
        changePrekidac: function(){

            // Prekidač koji s kojim otvaramo prozor kad biramo brojeve za tiket
            // True bit će prikazan, false nećemo ga viditi
            // U slučaju ako je false sa this.komb = [] praznimo niz tako da nam ne ostaju brojevi
            // koje smo možda već unijeli, odn. prekidamo unos

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

    p {font-size: 4vh;}

    #tiket {
        background-color: rgba(169, 169, 169, 0.4);
        padding: 10px;
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
        box-sizing: border-box;
        background-image: radial-gradient(white, gray);
        border: 2px solid white;
        height: 5vw; width: 5vw;
        margin: 5px;
        border-radius: 50%;
        font-size: 3vw;
    }

    #get-tiket {
        background-color: rgba(250, 127, 80, 0.8);
        font-size: 3vw;
        border: none;
        border-radius: 25px;
        width: 150px;
    }

    #esc:hover, .btn:hover, #get-tiket:hover {
        background: bisque;
        color:black;
    }

    .btn-izabrani {
        box-sizing: border-box;
        background-image: radial-gradient(white, blue);
        color: black;
        border: 2px solid white;
        height: 5vw; width: 5vw;
        margin: 5px;
        border-radius: 50%;
        font-size: 3vw;
    }

    @media only screen and (max-width: 600px){
        #left {
            display: block;
            margin: 0 auto; padding: 0;
            width: 100%;
            text-align: left;
        }
        #get-tiket {
            margin: 10px;
            font-size: 7vw;
        }
        #tiket {
            width: 80%; height: 85vh;
            margin: 0; padding: 0;
        }
        .btn {width: 10vw; height: 10vw; font-size: 3vh;}
        .btn-izabrani {width: 10vw; height: 10vw;margin-left: 0; font-size: 3vh;}
        p {margin: 10px;}
    }
</style>