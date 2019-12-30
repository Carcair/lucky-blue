<template>
    <div id="mid">

        <!-- 
            Pozivamo se na event koji smo kreirali, isto kao što bi na klikanje se pozvali
            znači v-on:click="" a u našem slučaju v-on:add-broj-bubanj=""
            sa pozivanjem tog eventa pokrenut će se funkcija addBrojBubanj
         -->
        <Bubanj v-on:add-broj-bubanj="addBrojBubanj" />
        <Counter />
    </div>
</template>

<script>
import Counter from './../Counter.vue';
import Bubanj from './../Bubanj.vue';

export default {
    name: 'gameMid',
    components: {
        Counter,
        Bubanj
    },
    methods: {

        /* Sa obzirom da se sve naše varijable nalaze u komponenti Game.vue, morat ćemo još jednom
        emitovati vrijednosti u slijedeću parent komponentu (odn. iz GameMid.vue u Game.vue)
        funkcija addBrojBubanj će uzeti varijablu prosljeđenu sa $emit iz child komponente Bubanj */
        
        addBrojBubanj: function(zadnjiBr){
            this.$emit('add-broj', zadnjiBr);
        }
    }
}
</script>

<style scoped>
    #mid {
        display: grid;
        grid-template-rows: 50% 40%;
    }
    
    @media only screen and (max-width: 600px){
        #mid {
            
        }
    }
</style>