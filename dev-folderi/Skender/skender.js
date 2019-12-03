/*6. Funkcija koja će vraćati samo zadnji broj iz kombinacije

        getZadnjiBr = function(){}  */

var objekt ={};
var kombinacija = [7,8,22,31,45,11];

  function getZadnjiBr(niz){
    var indeksZadnjegBr = niz.length - 1;
    var zadnjiBr = niz[indeksZadnjegBr];
    console.log(zadnjiBr);
  }