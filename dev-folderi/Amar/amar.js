
/*Funkcija koja će vraćati brojeve dobitne kombinacije
a. uzima vrijednosti iz niza kao u formatu objekt.dobitnaKombinacija
b. funkcija izbacuje svaki broj pojedinačno, znači pravimo je da vraća jedan broj */

// Emir:
/* 
Nisam na ovo mislio, do mene je ipak, nisam bio dovoljno jasan
dobitnaKombinacija je kombinacija koju računar generiše

Potrebno je napraviti funkciju koja će iz dobitne kombinacije ispisivati svaki broj pojedinačno
tj. iz
var kombinacija = [7,8,22,31,45,11];

funkcija će izbaciti prvo 7, pa 8, pa 22 itd.
uzimat će jednu varijablu, ta varijabla će biti indeks ovog niza
znači ne treba mi provjera, nego samo ispis, na osnovu te funkcije mi ćemo napraviti program
koji će nama ispisivati kugle sa brojevima svakih pet sekundi

Ovo što si uradio stavit ću pod komentar, nemoj brisati, nikad se ne zna, možda nam bude korisno

Usput, pogledaj u README.md i uradi i 6. zadatak, možeš iskoristiti istu funkciju kao što ćeš iskoristiti
u 5. samo ćeš tražiti ispis zadnjeg broja
*/


var kombinacija = [7,8,22,31,45,11];

/*
function provjeri(x){        
  let pogodci = 0;                        
  for(i=0;i<x.length;i++){                
    if(kombinacija.includes(x[i]))
      ++pogodci;
  }
  return pogodci;
}

var igraci = [
  {
    ime: "Gojko",
    prezime: "Sisa",
    komb : [7,8,55,6,99,3],
    kolikoPogodaka : function(){
      console.log("Ima pogodaka: "+provjeri(this.komb));
    }

  },
    {
    ime: "Mujo",
    prezime: "Mujic",
    komb : [7,8,22,6,99,45],
    kolikoPogodaka : function(){
      console.log("Ima pogodaka: "+provjeri(this.komb));
    }
  }
];

igraci[0].kolikoPogodaka();
igraci[1].kolikoPogodaka();
*/