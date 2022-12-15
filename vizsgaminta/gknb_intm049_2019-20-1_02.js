let jatek = {
  init: function() {
    this.elsoForditott = false;
    this.masodikForditott = false;
    this.talalat = false;
    this.kijelolve = 0;
    this.forditasok = 0;
    let fajlok = [ "html5.png", "css3.png", "js.png" ];
    fajlok = fajlok.concat(fajlok);
    this.ismeretlen = fajlok.length;
    for(let i=1; i<=6; i++) {
      let idx = Math.floor(Math.random()*fajlok.length);
      this["kartya"+i] = { 
        fajl: fajlok.splice(idx, 1)[0], 
        megforditva: false
      };
    }
  },
  
  ellenoriz: function() {
    if(this.talalat) {
      this[this.elsoForditott].megforditva = true;
      this[this.masodikForditott].megforditva = true;
      $("#"+this.elsoForditott).addClass("megforditva");
      $("#"+this.masodikForditott).addClass("megforditva");
    } else {
      $("#"+this.elsoForditott).attr("src", "web.png");
      $("#"+this.masodikForditott).attr("src", "web.png");
    }
    $("#"+this.elsoForditott).removeClass("megjelol");
    $("#"+this.masodikForditott).removeClass("megjelol");
    this.kijelolve = 0;
    this.elsoForditott = false;
    this.masodikForditott = false;
    if(this.ismeretlen == 0) {
      $("#info").text("Gratulálunk, Ön megtalálta az összes párt "+jatek.forditasok+" fordítással!");
      this.init();
      $("img").removeClass("megforditva").attr("src", "web.png");
    } else {
      $("#info").text("Kattintson az első kártya hátlapjára a megfordításához!");
    }
  },
  
  kattintas: function(kartya) {
    switch(this.kijelolve) {
      case 0:
        if(!this[kartya].megforditva) {
          this.elsoForditott = kartya;
          this.kijelolve = 1;
          this.forditasok++;
          $("#"+kartya).addClass("megjelol").attr("src", this[kartya].fajl);
          $("#info").text("Kattintson a második kártya hátlapjára a megfordításához!")
        }
        break;
      case 1:
        if(!this[kartya].megforditva && kartya!=this.elsoForditott) {
          this.masodikForditott = kartya;
          this.kijelolve = 2;
          this.forditasok++;
          $("#"+kartya).addClass("megjelol").attr("src", this[kartya].fajl);
          this.talalat = this[this.elsoForditott].fajl == this[this.masodikForditott].fajl;
          if(this.talalat) {
            $("#info").text("Megtalált egy kártyapárt!");
            this.ismeretlen -= 2;
          } else {
            $("#info").text("Nem egyeznek a kártyák, visszafordítjuk őket.");
          }
          setTimeout(function() {jatek.ellenoriz();}, 2000);
        }
        break;
    }
  }
};

$(function() {
  jatek.init();
  $("#kontener").click(function(e) {
    jatek.kattintas(e.target.id);
  });
});
