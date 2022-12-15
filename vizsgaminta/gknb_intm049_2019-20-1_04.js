let menetrend = {
  megallok: [],
  megalloGyujt: function(db) {
    for(let kulcs in db) {
      for(let i=0; i<db[kulcs].length; i++) {
        let mnev = db[kulcs][i].megallo;
        if(!this.megallok.includes(mnev)) {
          this.megallok.push(mnev);
        }
      }
    }
    this.megallok.sort();
  },
  opciok: function(szulo) {
    for(kulcs in this.megallok) {
      let opcio = $("<option>").attr("value", this.megallok[kulcs]).text(this.megallok[kulcs]);
      $(szulo).append(opcio);
    }
  },
  pontosIdo: function() {
    let d = new Date();
    let o = d.getHours();
    if(o<10) o="0"+o;
    let p = d.getMinutes();
    if(p<10) p="0"+p;
    return o+":"+p;
  },
  kereses: function(db, honnan, hova) {
    $(".jarat").remove();
    honnan = this.megallok[honnan];
    hova = this.megallok[hova];
    let ido = this.pontosIdo();
    let tartalom = $("#tartalom");
    for(let jarat in db) {
      let indul=-1, erkezik=-1;
      for(let m=0; m<db[jarat].length; m++) {
        if(db[jarat][m].megallo == honnan) {
          indul = m;
        }
        if(db[jarat][m].megallo == hova) {
          erkezik = m;
        }
        if(indul!=-1 && erkezik!=-1) break;
      }
      if(indul!=-1 && erkezik!=-1 && indul<=erkezik) {
        let blokk = $("<section>").addClass("jarat");
        if(db[jarat][indul].indul < ido) {
          blokk.addClass("keso");
        }
        blokk.append($("<h3>").text(jarat));
        blokk.append($("<p>").text("Indulás: "+db[jarat][indul].indul));
        blokk.append($("<p>").text("Érkezés: "+db[jarat][erkezik].erkezik));
        tartalom.append(blokk);
      }
    }
  }
};

$(function() {
  menetrend.megalloGyujt(adatbazis);
  menetrend.opciok($("#honnan")[0]);
  menetrend.opciok($("#hova")[0]);
  $("#urlap").submit(function(e) {
    let honnan = $("#honnan")[0].selectedIndex;
    let hova = $("#hova")[0].selectedIndex;
    if(honnan == hova) {
      alert("Jelöljön ki eltérő állomásokat!");
    } else {
      menetrend.kereses(adatbazis, honnan, hova);
    }
    e.preventDefault();
  });
});
