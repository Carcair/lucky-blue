/*
Zadatak ove aplikacije je slijedeći:  
    1. Generisati kombinaciju od 7 nasumičnih brojeva između 1 i 48  
        a. brojevi ne smiju biti isti  
        b. oni će biti smješteni u nizu objekt.dobitnaKombinacija  
        c. funkcija treba generisati svaki broj pojedinačno i odmah vršiti provjeru da li taj broj već postoji  

        getDobKomb = function(){}*/


var objekt = {};
objekt.dobitnaKombinacija = [];

//funkcija generisanja dobitne kombinacije

var getDobKomb = () => {
   for(;;){
    //generisanje nasumicnog broja (takodjer se moze napraviti zasebna funkcija koja generise jedan broj, ali msm da nema potrebe)
    var genBr = Math.floor(Math.random() * 48 + 1);
    if(!objekt.dobitnaKombinacija.includes(genBr)){
      objekt.dobitnaKombinacija.push(genBr);
    }
    if(objekt.dobitnaKombinacija.length==7){
      break;
    }
  }
  return objekt.dobitnaKombinacija;
};

console.log(getDobKomb());