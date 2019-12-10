<template>
    <div id="bubanj">
        <p id="broj">{{zadnjiBr}}</p>
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
        var self = this;
        var niz = [];
        var k = 47;
        for(let j = 1; j <= 48; j++){
            niz.push(j);
        }
        for(let i = 0; i < 7; i++){
            setTimeout(function(){
                var roll = setInterval(function(){
                    var temp = Math.floor(Math.random() * k + 1);
                    self.zadnjiBr = niz[temp];
                }, 200);

                setTimeout(function(){
                    clearInterval(roll);
                    niz.splice(niz.indexOf(self.zadnjiBr), 1);
                    k--;
                    self.$emit("add-broj-bubanj", self.zadnjiBr);
                }, 5000);
            }, 63000 + (i*7000));
        }
    },
    methods: {}
}
</script>

<style scoped>
    div {
        background: tomato;
        height: 300px; width: 300px;
        border-radius: 50%;
        margin: 10% auto 0 auto;
        text-align: center;
        border: 2px dotted black;
        line-height: 200px;
    }
    #broj {
        font-size: 52px;
    }
</style>