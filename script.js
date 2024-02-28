

function sesliHarfSayisi() {
    var metin = document.getElementById("metin").value;
    var sayac = 0;
    var sesliHarfler = "aeıioöuüAEIİOÖUÜ";

    for(var i = 0; i < metin.length; i++) {
      if(sesliHarfler.indexOf(metin[i]) !== -1) {
        sayac++;
      }
    }

    alert("Girilen cümlede " + sayac + " adet sesli harf var.");
  }