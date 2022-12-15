function osztalyzat(osszpontszam) {
  if(osszpontszam >= 45) return 5;
  if(osszpontszam >= 38) return 4;
  if(osszpontszam >= 31) return 3;
  if(osszpontszam >= 26) return 2;
  return 1;
}

function osszpontszam(pontok) {
  var osszesen = 0;
  for(var i=0; i<pontok.length; i++) {
    osszesen += pontok[i];
  }
  return osszesen;
}

function pontozas(e) {
  if(e.target.type == "number") {
    var pontok = document.querySelectorAll("input[type='number']");
    var p = [];
    for(var i=0; i<pontok.length; i++) {
      p.push(+pontok[i].value);
    }
    var osszesen = osszpontszam(p);
    var jegy = osztalyzat(osszesen);
    var szoveg = ["elégtelen", "elégséges", "közepes", "jó", "jeles"];
    document.getElementById("osszpontszam").textContent = osszesen;
    document.getElementById("jegy").textContent = szoveg[jegy-1]+" ("+jegy+")";
  }
  e.preventDefault();
}

window.addEventListener("load", function() {
  document.getElementById("urlap").
    addEventListener("change", pontozas, false);
}, false);
