var objekt = {
  dobitnaKombinacija: [],
  userKombinacije: [],
  tiketi: 0,
  najvisePogodaka: 0,
  pogodci: [],
};

// 1. Dino
// Generiše kombinaciju igre
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
// Unosi tiket u naš objekt i povećava broj tiketa
function setUserKomb(){
    let brTiketa = objekt.tiketi;
    let x = getUserKomb(brTiketa + 1);
    objekt.userKombinacije.push(x);
    objekt.tiketi++;
}

// 4. Haris
/* Glavna funkcija koja provjerava dobitne kombinacije */
function traziDobitne(){
  if(objekt.userKombinacije.length === 0){
    return;
  }
  var niz = []; /* Privremeni niz cija velicina zavisi od broja tiketa */
  /*For petlja koja provjerava koliko je tiketa u igri, te kreira privremeni niz objekata na osnovu toga.*/

  for(let i = 0; i < objekt.userKombinacije.length; i++){
    var temp = {};
    temp.brojPog = 0; /* NP bi bio privremena varijabla "Najvise Pogodaka"*/
    temp.pogBr = []; /* P bi bilo privremeni niz "Pogodci" */
    niz.push(temp);
  }
  /* Poslije ove petlje, u slucaju da imamo u igri 2 tiketa, niz objekata pod nazivom "niz" bi imao 2 objekta u sebi, ali prazna.
  Sa sljedecom petljom ga punimo . */

  /* Ispod je dupla petlja, prva provjerava koliko ima tiketa, a druga provjerava dobitne kombinacije, te pusha u niz objekata "niz",
  koji smo iznad kreirali*/

  for(let j = 0; j < objekt.userKombinacije.length; j++){
    for(let i = 0; i < 7; i++){
      if(objekt.userKombinacije[j].komb.includes(objekt.dobitnaKombinacija[i])){
        niz[j].brojPog++;
        niz[j].pogBr.push(objekt.dobitnaKombinacija[i])
      }
    }
  }

  var max = niz[0].brojPog; /* Ispod provjeravam koji objekat u nizu ima najvecu vrijednost varijable NP. */

  for(let i = 0; i < niz.length; i++){
    if(niz[i].brojPog > max){
      max = niz[i];
    }
  }
  objekt.najvisePogodaka = max; /* Nas glavni Broj pogodaka koji ispisujemo na kraju je ovom linijom definisan*/
  objekt.pogodci = niz;
}

// 5. Amar
// Ispisuje brojeve kombinacije igre
function getVrijednost(x){
  return objekt.dobitnaKombinacija[x];
};

/*
// 6. Skender
// Ispisuje zadnji broj
function getZadnjiBr(niz){
  var indeksZadnjegBr = niz.length - 1;
  var zadnjiBr = niz[indeksZadnjegBr];
  console.log(zadnjiBr);
}
*/

// 8. EmirD

function ispisBr(){
  var temp = "Kombinacija Lucky-Blue je: ";
  for(let i = 0; i < objekt.dobitnaKombinacija.length; i++){
    temp += getVrijednost(i) + " | ";
  }
  document.getElementById("kombinacija").innerHTML = temp;
}
function ispisZadnjiBr(){
  var zadnjiIndeks = objekt.dobitnaKombinacija.length - 1;
  var temp = "Zadnji broj u kombinaciji je: " + objekt.dobitnaKombinacija[zadnjiIndeks];
  document.getElementById("zadnji-br").innerHTML = temp;
}

function getValue(x){
  console.log(x);
}

function getPomNiz(){
  let niz = []
  for(let i = 1; i <= 48; i++)
    niz.push(i);
  return niz;
}


// Umjesto bubnja za početak
function animaus(){
  function test(){
    var temp = 1;
    temp = Math.floor(Math.random() * 47 +1);
    document.getElementById("test").innerHTML = temp;
  }
  var roll = setInterval(test, 100);
  function clearIt(){
    clearInterval(roll);
  }
  setTimeout(clearIt, 5000);
}