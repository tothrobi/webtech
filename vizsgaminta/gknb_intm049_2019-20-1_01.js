var MERET = 4;

$(function() {
  general();
  $("#urlap").submit(function(e) {
    if(ellenoriz(lekerdez())) {
      alert("Ez egy latin négyzet!");
    } else {
      alert("Ez nem latin négyzet.");
    }
    e.preventDefault();
  });
});

function lekerdez() {
  var mtx = [];
  for(var i=0; i<MERET; i++) {
    mtx.push(new Array(MERET));
  }
  var szamok = $("input[type='number']").val(function(i, v) {
    var s = Math.floor(i/MERET);
    var o = i%MERET;
    mtx[s][o] = +v;
    return v;
  });
  return mtx;
}

function sorEll(mtx, s) {
  var t = [];
  for(var i=0; i<mtx[s].length; i++) {
    var szam = mtx[s][i];
    if(t.includes(szam)) return false;
    else t.push(szam);
  }
  return true;
}

function oszlopEll(mtx, o) {
  var t = [];
  for(var i=0; i<mtx.length; i++) {
    var szam = mtx[i][o];
    if(t.includes(szam)) return false;
    else t.push(szam);
  }
  return true;
}

function ellenoriz(mtx) {
  for(var i=0; i<mtx.length; i++) {
    if(!sorEll(mtx, i)) return false;
    if(!oszlopEll(mtx, i)) return false;
  }
  return true;
}

function general() {
  var tabla = $("<table>");
  var sor, cella;
  for(var s=0; s<MERET; s++) {
    sor = $("<tr>");
    for(var o=0; o<MERET; o++) {
      cella = $("<td>");
      cella.append($("<input>").attr({type: "number", min: "1", max: MERET, value: (s+o)%MERET+1, required: "required"}));
      sor.append(cella);
    }
    tabla.append(sor);
  }
  $("#tabla").replaceWith(tabla);
}
