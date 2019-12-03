/*
2. Funkcija pomoću koje će korisnik birati 7 brojeva između 1 i 48
    a. brojevi ne smiju biti isti
    b. bit će u obliku objekta {brojTiketa: #, komb:[brojevi]}
    c. mora biti dodjeljen svoj unikatni brojTiketa (za sad uraditi za samo jedan ticket), inkrementacija
    d. trenutno možemo koristiti parseint(prompt()) za unos brojeva
*/

var nizKomb = [];


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

for(let i = 0; i < 2; i++){
    let komb = getUserKomb(i+1);
    nizKomb.push(komb);
}

console.log(nizKomb);