<template>
    <div>
        <p id="bubanj">{{zadnjiBr}}</p>
    </div>
</template>

<script>

export default {
    name: 'bubanj',
    data: function() {
        return {
            zadnjiBr: "",
        }
    },
    created: function() {

        // Birat ćemo nasumične brojeve, tako što ćemo kreirati niz 1-48
        // generisat ćemo nasumični broj koji ćemo proslijeđivati kao indeks
        // tako da kad budemo dobili jedan broj, njega ćemo izbaciti iz niza
        // te ćemo novi broj opet tražiti preko indeksa
        // kako budemo birali brojeve mogući broj indeksa će se smanjivati (k)
        // Tako i ako dobijemo isti indeks pri generisanju, više ne možemo izabrati isti broj
        // jer on više ne postoji u nizu

        var self = this;
        var niz = []; // niz iz kojeg ćemo generisati brojeve
        var k = 47; //  brojac koji će biti max broj indeksa

        for(let j = 1; j <= 48; j++){
            niz.push(j);
        }

        for(let i = 0; i < 7; i++){

            // Ovo nam pravi Quasi animaciju, svake 0.2 sekunde ćemo uzeti novi broj
            // Slično kao u Counter.vue, ova animacija će se izvršiti nakon 120 + 3 sekunde
            // i za svaku iteraciju još +(i*7) sekunde nakon
            
            setTimeout(function(){
                var roll = setInterval(function(){
                    var temp = Math.floor(Math.random() * k + 1); // Biramo nasumični indeks i proslijeđujemo ga nizu
                    self.zadnjiBr = niz[temp];
                }, 200);

                // Nakon 5 sekundi, animacija definisana sa setInterval() se prekida,
                // Izbacuje se broj u nizu, smanjujemo indeks za jedan i šaljemo taj broj u 
                // Game.vue koji nam je parent element sa $emit funkcijom

                setTimeout(function(){
                    clearInterval(roll);
                    niz.splice(niz.indexOf(self.zadnjiBr), 1);
                    k--; // smanjujemo broj indeksa

                    // this.$emit("ime-eventa", varijablu koju šaljemo)
                    // kada šaljemo vrijednosti iz child elementa u njegov parent element (komponenta Bubanj.vue se ubacuje u komponentu GameMid.vue)
                    self.$emit("add-broj-bubanj", self.zadnjiBr);
                }, 5000);
            }, 123000 + (i*7000));
        }
    },
    methods: {}
}
</script>

<style scoped>
    div {
        width: 100%;
        text-align: center;
        font-size: 32px;
        position: absolute;
        top: 30%;
    }
</style>