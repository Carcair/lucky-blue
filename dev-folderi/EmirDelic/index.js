var objekt = {
    dobitnaKombinacija: [],
    userKombinacije: [],
    tiketi: 0,
    najvisePogodaka: 0,
};


// 1. Dino
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
};
getDobKomb();

// 2. Semra
// Funkcija koja će tražiti unos broja
function getBroj(niz, rBroj, brTiketa){
    let broj = parseInt(prompt("Unesi " + (rBroj+1) + ". broj između 1 i 48. Tiket: " + brTiketa));

    // Provjeravamo da li broj postoji u nizu i da li je "broj" broj
    if(niz.includes(broj) || isNaN(broj))
        broj = getBroj(niz, rBroj, brTiketa);
    
    // Provjeravamo da li je broj od 1 do 48
    if(broj < 1 || broj > 48)
        broj = getBroj(niz, rBroj, brTiketa); 
    return broj;
}

// Funkcija koja će generisati korisnički tiket
function getUserKomb(x) {
    var userKomb = {};
    userKomb.id = x;
    userKomb.komb = [];

    // Biramo 7 svojih brojeva
    for(let j = 0; j < 7; j++){
        let broj = getBroj(userKomb.komb, j, x);
        userKomb.komb.push(broj);
    }

    return userKomb;
}

// 3. Emir O.

function setUserKomb(){
    let brTiketa = objekt.tiketi;
    let x = getUserKomb(brTiketa + 1);
    objekt.userKombinacije.push(x);
    objekt.tiketi++;
}

// 4. Haris
/* Glavna funkcija koja provjerava dobitne kombinacije */
function traziDobitne(){
    var niz=[]; /* Privremeni niz cija velicina zavisi od broja tiketa */
    /*For petlja koja provjerava koliko je tiketa u igri, te kreira privremeni niz objekata na osnovu toga.*/
      
    for(let k=0;k<objekt.userKombinacije.length;k++){
        var temp={};
        temp.NP=0; /* NP bi bio privremena varijabla "Najvise Pogodaka"*/
        temp.P=[]; /* P bi bilo privremeni niz "Pogodci" */
        niz.push(temp);
    }
  /* Poslije ove petlje, u slucaju da imamo u igri 2 tiketa, niz objekata pod nazivom "niz" bi imao 2 objekta u sebi, ali prazna.
  Sa sljedecom petljom ga punimo . */
  
  /* Ispod je dupla petlja, prva provjerava koliko ima tiketa, a druga provjerava dobitne kombinacije, te pusha u niz objekata "niz",
  koji smo iznad kreirali" Te on izgleda ovako:
   niz=[
    {NP:7 - znaci 7 pogodjenih brojeva- Tiket redni broj 1
  P:[1,2,3,4,5,6,7] - Ovo je niz od tih 7 pogodjenih.
  },
  {
  NP:5, - 5 pogodjenih brojeva Tiket redni broj 2
  P:[2,3,5,6,7] . Ovo je niz od 5 pogodjenih brojeva.
  }]*/
  
    for(let j=0;j<objekt.userKombinacije.length;j++){
        for(let i=0;i<7;i++){
            if(objekt.userKombinacije[j].komb.includes(objekt.dobitnaKombinacija[i])){
                niz[j].NP++;
                niz[j].P.push(objekt.dobitnaKombinacija[i])
            }
        }
    }
  
    var min=niz[0].NP; /* Ispod provjeravam koji objekat u nizu ima najmanju vrijednost varijable NP. Ovo nam ne treba al aj*/
    var max=niz[0].NP; /* Ispod provjeravam koji objekat u nizu ima najvecu vrijednost varijable NP. */
  
    for(let t=0;t<niz.length;t++){
        if(niz[t].NP < min) {
            min = niz[t];
        }
        if(niz[t].NP>max){
            max=niz[t];
        }
    }
    objekt.najvisePogodaka=max; /* Nas glavni Broj pogodaka koji ispisujemo na kraju je ovom linijom definisan*/
  
  /* Pomocu ove for petlje pronalazimo koje su to dobitne kombinacije u tiketu koji ima najvise pogodaka*/
  
    for(let q=0;q<niz.length;q++){
        if(niz[q].NP==objekt.najvisePogodaka){
            objekt.pogodci=niz[q].P;
        }
    }
}

// 5. Amar

function getVrijednost(x){
    return objekt.dobitnaKombinacija(x)
};
/*
for(let i=0; i < objekat.dobitnaKombinacija.length; i++){
    console.log(getVrijednost);
}
*/
