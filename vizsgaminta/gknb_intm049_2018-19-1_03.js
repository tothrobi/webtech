var kivett  = 0;

function valtoztat(e) {
  e = $(e.target);
  if(e.attr("class") == "munkanap") {
    kivett++;
    e.attr("class", "szabadsag");
  } else if(e.attr("class") == "szabadsag"){
    kivett--;
    e.attr("class", "munkanap");
  }
  $("#szabadsag").text(kivett);
}

$(function() {
  var tablazat = $("<table>");
  tablazat.attr("id", "tablazat");
  // felső fejléc
  var sor = $("<tr>");
  sor.append($("<td>"));
  for(var nap=1; nap<=31; nap++) {
    var cella = $("<th>");
    cella.text(nap);
    sor.append(cella);
  }
  tablazat.append(sor);
  // adatsorok
  var ev = new Date().getFullYear();
  for(var ho=1; ho<=12; ho++) {
    sor = $("<tr>");
    cella = $("<th>");
    cella.text(ho);
    sor.append(cella);
    var maxNap = new Date(ev, ho, 0).getDate();
    for(nap=1; nap<=31; nap++) {
      cella = $("<td>");
      if(nap > maxNap) cella.addClass("nincs");
      else {
        var hn = new Date(ev, ho-1, nap).getDay();
        if(hn==0 || hn==6) {
          cella.addClass("hetvege");
        } else {
          cella.addClass("munkanap");
        }
      }
      sor.append(cella);
    }
    tablazat.append(sor);
  }
  // táblázat cseréje
  $("#tablazat").replaceWith(tablazat);
  
  tablazat.click(valtoztat);
});
