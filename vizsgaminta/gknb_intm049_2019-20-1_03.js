let jatek = {
  
  lampak: 9,
  klikk: 0,
  
  felkapcsolva: function(mezo) {
    return mezo && mezo.children.length > 0;
  },
  
  atkapcsol: function(mezo) {
    if(this.felkapcsolva(mezo)) {
      $(mezo).empty().attr("title", "Lámpa lekapcsolva");
      return -1;
    } else {
      $(mezo).append($("<img>").attr({
        src: "bulb.svg",
        alt: "izzó"
      })).attr("title", "Lámpa felkapcsolva");
      return 1;
    }
  },
  
  szomszedok: function(mezo) {
    let tomb = [];
    if(mezo.previousElementSibling != null) {
      tomb.push(mezo.previousElementSibling); // bal
    }
    if(mezo.nextElementSibling != null) {
      tomb.push(mezo.nextElementSibling); // jobb
    }
    let oszlop = 0;
    let gyerek = mezo;
    while((gyerek = gyerek.previousElementSibling) != null) {
      oszlop++;
    }
    let sor = mezo.parentNode;
    if(sor.previousElementSibling != null) {
      tomb.push(sor.previousElementSibling.children[oszlop]); // fent
    }
    if(sor.nextElementSibling != null) {
      tomb.push(sor.nextElementSibling.children[oszlop]); // lent
    }
    return tomb;
  },
  
  kattintas: function(mezo) {
    if(this.lampak != 0) {
      this.klikk++;
      this.lampak += this.atkapcsol(mezo);
      let t = this.szomszedok(mezo);
      for(let m in t) {
        this.lampak += this.atkapcsol(t[m]);
      }
      if(this.lampak == 0) {
        alert("Gratulálunk, Ön minden lámpát lekapcsolt " + 
          this.klikk + " kattintással!");
      }
    }
  }
  
};

$(function() {
  $("table").click(function(e) {
    let mezo = e.target;
    if(mezo.tagName == "IMG") {
      mezo = mezo.parentNode;
    }
    if(mezo.tagName == "TD") {
      jatek.kattintas(mezo);
    }
  });
});
