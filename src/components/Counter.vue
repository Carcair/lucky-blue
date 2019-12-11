<template>
    <div>
        <p id="brojac">{{brojac}}</p>
    </div>
</template>

<script>
export default {
    name: 'counter',
    data: function() {
        return {
            brojac: "",
        }
    },
    created: function() {
        var self = this;
        self.brojac = "02 : 00";
        var minuta = 2;
        var sekunda = 0;
        
        var sekCount = setInterval(function(){

            // jednostavna provjera koja će osigurati da je format countera uvijek "** : **"

            if(sekunda != 0){
                if(sekunda <= 10){
                    sekunda--;
                    sekunda = "0" + sekunda;
                }else{
                    sekunda--;
                }
            }else{
                sekunda = 59;
                minuta--;
            }
            self.brojac = "0" + minuta + " : " +sekunda;

            // Za razliku od setTimeout koji će se obaviti samo jednom, setInterval će se obavljati
            // svakog određenog intervala, zato ga uobičajeno dodjeljujemo nekoj varijabli
            // i tu varijablu dodijeljujemo clearInterval(var) funkciji koja će interval prekinuti

            if(minuta == 0 && sekunda == 0){
                clearInterval(sekCount);
            }
        }, 1000);

        // Brojač do početka igre zamjenjuje brojač runde, koji će se izvršavati 7 puta
        // Brojač smo stavili kao interval od 5 sekundi, s tim što smo stavili 2 sekunde neke intermisije
        // tako da nam naš broj koji izađe može biti na ekranu neko vrijeme

        for(let i = 0; i < 7; i++){
            setTimeout(function(){
                sekunda = 5;
                var roundCount = setInterval(function(){
                    self.brojac = sekunda
                    sekunda--;
                    if(sekunda == -1){
                        clearInterval(roundCount);
                    }
                }, 1000);
            }, 122000 + (i*7000));
            
            // for(;;) petlja će osigurati da se funkcija izvrši n puta, i iako će se svaki rezultat izbaciti
            // po svom redu (prvo za i=0, pa za i=1 itd.) u principu sve se funkcije izvršavaju istovremeno
            // Zbog toga smo stavili slijedeće:
            //      1. 122000 ms, nakon što nam istekne brojač od 2 minute (120 sekunde) i 2 sek intermisije
            //      počet će counter za prvu rundu, prva runda je pod iteracijom 0, 0*7000, znači da će se odmah obaviti
            //      2. i*7000, će osigurati da svaki counter bude pokrenut 7 sekundi nakon prijašnjeg ili
            //      i*7 sekundi nakon završetka 122 sekunde od početka naše igre
        }
    },
}
</script>

<style scoped>
    div {
        width: 100%;
        text-align: center;
        font-size: 32px;
        position: absolute;
        bottom: 30%;
    }
</style>