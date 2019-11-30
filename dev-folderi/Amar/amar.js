var kombinacija = [7,8,22,31,45,11];

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
