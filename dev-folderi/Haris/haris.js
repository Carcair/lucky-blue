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
        function traziDobitne(){
        var niz=[];
        for(let k=0;k<objekt.userKombinacije.length;k++){
        var temp={};
        temp.NP=0;
        temp.P=[];
        niz.push(temp);
        }
         for(let j=0;j<objekt.userKombinacije.length;j++){
         for(let i=0;i<7;i++){
        if(objekt.userKombinacije[j].komb.includes(objekt.dobitnaKombinacija[i])){
        niz[j].NP++;
        niz[j].P.push(objekt.dobitnaKombinacija[i])
        }}}
        var min=niz[0].NP;
        var max=niz[0].NP;
        for(let t=0;t<niz.length;t++){
        if(niz[t].NP < min) {
        min = niz[t];
        }
        if(niz[t].NP>max){
          max=niz[t];
         }}
        
        objekt.najvisePogodaka=max;
        console.log(niz);
        for(let q=0;q<niz.length;q++){
        
        if(niz[q].NP==objekt.najvisePogodaka){
          objekt.pogodci=niz[q].P;
        }}}
        traziDobitne();
        console.log(objekt.pogodci)
        console.log(objekt.najvisePogodaka)
        