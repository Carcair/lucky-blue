<template>
    <div>
        <p id="brojac">{{brojac}}</p>
    </div>
</template>

<script>
export default {
    name: 'counter',
    data() {
        return {
            brojac: "",
        }
    },
    created() {
        var self = this;
        self.brojac = "02 : 00";
        var minuta = 2;
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