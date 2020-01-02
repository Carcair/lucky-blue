<template>
    <div id="left" v-animate-css="'slideInLeft'">
        <span>Broj tiketa: {{tiketi-1}}</span>

        <!-- ako je kraj == true pokazati će ovaj div, kada bude kraj == false, to znači da ne možemo više unositi tikete, odn. počela je igra -->
        <div v-if="kraj">

            <!-- prekidac je varijabla pomoću koje ćemo prikazati ili sakriti prozor sa brojevima
            prekidac je true na početku, false kada kliknemo na Get Ticket i opet true kada kliknemo
            na "x" button -->
            <transition name="custom-classes-transition" enter-active-class="animated slideInLeft" leave-active-class="animated slideOutLeft" mode="out-in">
                <button  id="get-tiket" v-if="prekidac" v-on:click="changePrekidac()">Get Ticket</button>
            

                <div v-else id="tiket">
                    <div id="esc-div">
                        <button id="esc" v-on:click="changePrekidac()">x</button>
                    </div>
                    
                    <br><br>
                    <span>ID tiketa: {{tiketi}}</span><br>
                    <!-- pravi button za svaki element u nizBr, element u ovom slučaju nazivamo broj i uzimamo njegovu vrijednost i ispisujemo unutar buttona -->
                    <button v-bind:class="{'btn':!isClicked(broj),'btn-clicked':isClicked(broj)}" v-on:click="getBroj(broj)" v-bind:key="broj" v-for="broj in nizBr">{{broj}}</button>
                    
                    <hr>
                    <!-- pravi button za svaki element (kojeg smo ovdje nazvali brojKomb) u nizu komb i ispisuje njegovu vrijednost -->
                    
                    <button class="btn-izabrani" v-bind:key="'A' + brojKomb" v-for="brojKomb in komb" disabled>{{brojKomb}}</button>
                    
                </div>
            </transition>
        </div>

        <!-- ako je kraj == false -->
        <p v-else>Ne možete više birati tikete!</p>
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
                    this.printMe(newKomb);
                    this.komb = [];
                    this.tiketi++;
                    this.$emit('add-komb', newKomb);
                    this.prekidac = !this.prekidac;
                }
            }
        },

        // Metoda za provjeru da li je taj broj kliknut u svrhu vezanja klase za button
        // tako da broj koji smo izabrali ima drugu boju
        isClicked(broj) {
            if(this.komb.includes(broj))
                return true
            else
                return false
        },

        // Funkcija za printanje, moguće je koristiti puno lakšu opciju
        // instalirati vue-html-to-paper plugin koji nam omogućava printanje komponente koju
        // proslijedimo toj funkciji
        // Međutim, taj plug-in na zadržava stil komponente
        // Ovdje koristimo malo "skupocjenu" funkciju
        // Kreiramo "mini" HTML dokument sa svojim CSS-om i tražimo print tog HTML-a
        printMe(obj) {
            const WinPrint = window.open('', '', 'left=0,top=0,width=345,height=545,toolbar=0,scrollbars=0,status=0');

            WinPrint.document.write(`
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <meta http-equiv="X-UA-Compatible" content="ie=edge">
                    <title>Document</title>
                    <style>
                        .container {text-align: center; height: 480px; width: 300px; border: 1px solid black;}
                        .container ul {list-style: none;}
                        #tiket {font-size: 24px; font-style: italic;}
                        span {font-weight: bold;}
                        .brojevi p {
                            width: 20px;
                            margin: 5px auto;
                            font-size: 16px;
                            border: 1px solid black;
                            border-radius: 10px;
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <img src="https://lucky-blue.netlify.com/img/LOGO.aff925a3.png" height="100px" alt="pic">
                        <hr>
                        <p id="tiket">Tiket: <span>#${obj.brTiketa}</span></p>
                        <hr>
                        <div class="brojevi">
                            <p>${obj.komb[0]}</p>
                            <p>${obj.komb[1]}</p>
                            <p>${obj.komb[2]}</p>
                            <p>${obj.komb[3]}</p>
                            <p>${obj.komb[4]}</p>
                            <p>${obj.komb[5]}</p>
                            <p>${obj.komb[6]}</p>
                        </div>
                        <hr>
                        <p>Lucky Blue by @SPARK</p>
                    </div>
                </body>
                </html>
            `);

            WinPrint.document.close();
            WinPrint.focus();

            // Funkcija koja će uzeti fokusirani HTML dokument WinPrint i izprintati ga
            // pravimo timeout da print dialog ima vremena loadati sliku
            setTimeout(() => {
                WinPrint.print();
                WinPrint.close();
            }, 1000);
        }
    }
}
</script>

<style scoped>
    #left {
        padding: 10px 15px;
        box-sizing: border-box;
        width: 100vw;
        text-align: center;
        position: absolute; top: 5vh;
        z-index: 1;
    }

    span, p {font-size: 4vh;}

    #tiket {
        background-color: rgba(169, 169, 169, 0.4);
        padding: 10px;
    }

    button {
        cursor: pointer;
    }

    #esc-div {
        text-align: right;
    }

    #esc {
        border: none;
        color: white; background-color: rgba(255, 0, 0, 0.5);
        border-radius: 50%;
        padding: 4px 8px;
        font-weight: bold;
        height: 5vh; width: 5vh;
        font-size: 3vh;
    }

    .btn {
        box-sizing: border-box;
        background-image: radial-gradient(white, gray);
        border: 2px solid white;
        height: 5vh; width: 5vh;
        margin: 5px;
        border-radius: 50%;
        font-size: 3vh;
    }
    .btn-clicked {
        box-sizing: border-box;
        background-image: radial-gradient(white, crimson);
        border: 2px solid white;
        height: 5vh; width: 5vh;
        margin: 5px;
        border-radius: 50%;
        font-size: 3vh;
    }

    #get-tiket {
        background-color: rgba(250, 127, 80, 0.8);
        font-size: 4vh;
        border: none;
        border-radius: 1vh;
        padding: 1vh;
    }

    #esc:hover, .btn:hover  {
        background: radial-gradient(white, blue);
        color:black;
    }
    #get-tiket:hover {background-color: gray;}

    .btn:hover, .btn-clicked:hover, #esc:hover, .btn-izabrani:hover, #get-tiket:hover {
        animation: pop 1s ease;
        -webkit-animation: pop 1s ease;
        animation-iteration-count: infinite;
    }
    @keyframes pop {
        0% {transform: scale(1)}
        50% {transform: scale(1.2)}
        100% {transform: scale(1)}
    }

    .btn-izabrani {
        box-sizing: border-box;
        background-image: radial-gradient(white, blue);
        color: black;
        border: 2px solid white;
        height: 5vh; width: 5vh;
        margin: 5px;
        border-radius: 50%;
        font-size: 3vh;
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

    @media (orientation: landscape) {
        .btn, .btn-clicked {width: 10vh; height: 10vh; font-size: 5vh;}
        .btn-izabrani {width: 10vh; height: 10vh;margin-left: 0; font-size: 5vh;}
    }
</style>