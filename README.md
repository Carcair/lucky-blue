# Lucky-Blue

# Naš glavni objekat sa svim varijablama, podacima koje će sadržavati, vrijednosti su samo primjeri
function(){}
var objekt = {
    dobitnaKombinacija: [1, 2, 3, 4, 5, 6, 7],
    userKombinacije: [
        {brojTiketa:1,komb:[1,2,3,4,5,6,7]}, 
        {...},
        {...},
        ...,
    ],
    tiketi: [1, 2, 3, 4, 5, 6, ...],
    dobitnici: [
        {brojTiketa:1,komb:[1,2,3,4,5,6,7]},
        {...},
        {...},
        ...,
    ],
    najvišePogodaka: 0,
    pogodci: [],
}

Zadatak ove aplikacije je slijedeći:
    1. Generisati kombinaciju od 7 nasumičnih brojeva između 1 i 48
        a. brojevi ne smiju biti isti
        b. oni će biti smješteni u nizu objekt.dobitnaKombinacija
        c. funkcija treba generisati svaki broj pojedinačno i odmah vršiti provjeru da li taj broj već postoji

        getDobKomb = function(){}
    
    2. Funkcija pomoću koje će korisnik birati 7 brojeva između 1 i 48
        a. brojevi ne smiju biti isti
        b. bit će u obliku objekta {brojTiketa: #, komb:[brojevi]}
        c. mora biti dodjeljen svoj unikatni brojTiketa (za sad uraditi za samo jedan ticket), inkrementacija
        d. trenutno možemo koristiti parseint(prompt()) za unos brojeva

        getUserKomb = function(){}

    3. Funkcija koja će istovremeno dodati korisničku kombinaciju i broj tiketa u niz objekt.userKombinacije i brojTiketa u objekt.tiketi
        a. za početak koristiti objekat {brojTiketa: #, komb: [brojevi]} sa vašim vrijednostima
        b. uradite funkciju i pozovite je za 2-3 različita objekta kojima ste sami vrijednosti zadali
        c. nakon što se uradi zadatak 2. onda ćemo ih spojiti

        getUserKombs = function(){}
    
    4. Funkcija koja će tražiti dobitne kombinacije
        a. napraviti jednu korisničku kombinaciju u formatu kao u objekat.userKombinacije
        b. napraviti jednu kombinaciju formata objekat.dobitnaKombinacija
        c. uzimati vrijednosti iz dobitne kombinacije i tražiti ih u korisničkim kombinacijama
        d. u varijablu najvišePogodaka upisati koliko je bilo pogođenih brojeva
        e. u niz pogodci ubaciti pogođene brojeve

        getPobjednik = function(){}

    5. Funkcija koja će vraćati brojeve dobitne kombinacije
        a. uzima vrijednosti iz niza kao u formatu objekt.dobitnaKombinacija
        b. funkcija izbacuje svaki broj pojedinačno, znači pravimo je da vraća jedan broj

        getIspisKomb = function(){}

    6. Funkcija koja će vraćati samo zadnji broj iz kombinacije

        getZadnjiBr = function(){}

    7. Objekat koji sadržavati samo funkcije/metode, nazvat ćemo ga getters
        a. funkcije će biti prazne, odn. function(){}
        b. za imena metoda pogledati ostale zadatke


# Dino Šahman
Zadatak br. 1.

# Haris Mahmutagić
Zadatak br. 4.

# Mirza Bibić
HTML + CSS

# Amar Mujkanović
Zadatak br. 6. i 7.

# Emrah Hadžišehić
Dizajn

# Semra Smajlagić
Zadatak br. 2.

# Emir Obralić
Zadatak br. 3.

# Skender Međić
Zadatak br. 5.





# lucky-blue

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
