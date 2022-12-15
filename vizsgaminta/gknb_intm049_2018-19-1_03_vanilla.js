var kivett  = 0;

function valtoztat(e) {
  if(e.target.className=="munkanap") {
    kivett++;
    e.target.className="szabadsag";
  } else if(e.target.className=="szabadsag"){
    kivett--;
    e.target.className="munkanap";
  }
  document.getElementById("szabadsag").textContent = kivett;
}

window.addEventListener("load", function() {
  var tablazat = document.createElement("table");
  tablazat.id = "tablazat";
  // felső fejléc
  var sor = document.createElement("tr");
  sor.appendChild(document.createElement("td"));
  for(var nap=1; nap<=31; nap++) {
    var cella = document.createElement("th");
    cella.textContent = nap;
    sor.appendChild(cella);
  }
  tablazat.appendChild(sor);
  // adatsorok
  var ev = new Date().getFullYear();
  for(var ho=1; ho<=12; ho++) {
    sor = document.createElement("tr");
    cella = document.createElement("th");
    cella.textContent = ho;
    sor.appendChild(cella);
    var maxNap = new Date(ev, ho, 0).getDate();
    for(nap=1; nap<=31; nap++) {
      cella = document.createElement("td");
      if(nap > maxNap) cella.className="nincs";
      else {
        var hn = new Date(ev, ho-1, nap).getDay();
        if(hn==0 || hn==6) {
          cella.className="hetvege";
        } else {
          cella.className="munkanap";
        }
      }
      sor.appendChild(cella);
    }
    tablazat.appendChild(sor);
  }
  // táblázat cseréje
  document.body.replaceChild(tablazat, document.getElementById("tablazat"));
  
  tablazat.addEventListener("click", valtoztat, false);
}, false);
