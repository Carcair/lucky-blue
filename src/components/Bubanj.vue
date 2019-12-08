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
        for(let i = 0; i < 7; i++){
            setTimeout(function(){
                var roll = setInterval(function(){
                    var temp = Math.floor(Math.random() * 47 + 1);
                    
                    niz.push(temp);
                    self.zadnjiBr = temp;
                }, 100);

                setTimeout(function(){
                    clearInterval(roll);
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