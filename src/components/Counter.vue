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
        var minuta = 1;
        var sekunda = 0;
        
        var sekCount = setInterval(function(){
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
            if(minuta == 0 && sekunda == 0){
                clearInterval(sekCount);
            }
        }, 1000);
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
            }, 62000 + (i*7000));
        }
    },
}
</script>

<style scoped>
    div {
        width: 100%;
        text-align: center;
        background: wheat;
        margin-top: 50px;
        font-size: 32px;
    }
</style>