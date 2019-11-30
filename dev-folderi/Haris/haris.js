/*4. Funkcija koja će tražiti dobitne kombinacije
        a. napraviti jednu korisničku kombinaciju u formatu kao u objekat.userKombinacije
        b. napraviti jednu kombinaciju formata objekat.dobitnaKombinacija
        c. uzimati vrijednosti iz dobitne kombinacije i tražiti ih u korisničkim kombinacijama
        d. u varijablu najvišePogodaka upisati koliko je bilo pogođenih brojeva
        e. u niz pogodci ubaciti pogođene brojeve */


var objekt = {  
    dobitnaKombinacija: [1, 2, 3, 4, 5, 6, 7],  
    userKombinacije: [  
        {brojTiketa:1,komb:[1,2,3,4,5,6,7]},   
        {brojTiketa:2,komb:[12,2,3,9,5,6,7]},  
      ],  
    najvisePogodaka: 0,  
    pogodci: [],  
}
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

/*Poziv funkcije i ispis*/
traziDobitne();
console.log(objekt.pogodci)
console.log(objekt.najvisePogodaka)