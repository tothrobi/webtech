var rendezes = sorszamSzerint;

function sorszamSzerint(a, b) {
  if(a.sorszam < b.sorszam) return -1;
  else if(a.sorszam == b.sorszam) return 0;
  else return 1;
}

function cimSzerint(a, b) {
  if(a.cim < b.cim) return -1;
  else if(a.cim == b.cim) return 0;
  else return 1;
}

window.addEventListener("load", function() {
  let radiok = document.querySelectorAll("input[type='radio']");
  for(var i=0; i<radiok.length; i++) {
    radiok[i].addEventListener("change", feltolt);
  }
  document.getElementById("sorszam").addEventListener("click", function() {
    rendezes = sorszamSzerint;
    feltolt();
  });
  document.getElementById("cim").addEventListener("click", function() {
    rendezes = cimSzerint;
    feltolt();
  });
});

function feltolt() {
  var lista = document.getElementById("lista");
  while(lista.firstChild) {
    lista.removeChild(lista.firstChild);
  }
  let radiok = document.querySelectorAll("input[type='radio']");
  let kivAlbum = null;
  for(var i=0; i<radiok.length; i++) {
    if(radiok[i].checked) {
      kivAlbum = radiok[i].id;
      break;
    }
  }
  if(kivAlbum !== null) {
    let sor;
    let cella;
    albumok[kivAlbum].sort(rendezes);
    for(var szam in albumok[kivAlbum]) {
      sor = document.createElement("tr");
      cella = document.createElement("td");
      cella.textContent = albumok[kivAlbum][szam]["sorszam"];
      sor.appendChild(cella);
      cella = document.createElement("td");
      cella.textContent = albumok[kivAlbum][szam]["cim"];
      sor.appendChild(cella);
      cella = document.createElement("td");
      cella.textContent = albumok[kivAlbum][szam]["eloado"];
      sor.appendChild(cella);
      cella = document.createElement("td");
      cella.textContent = albumok[kivAlbum][szam]["hossz"];
      sor.appendChild(cella);
      lista.appendChild(sor);
    }
  }
}
