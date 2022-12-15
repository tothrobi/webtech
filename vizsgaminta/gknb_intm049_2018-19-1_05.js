var autok = {};

$(function() {
	$("#urlap").submit(function(e) {
		try {
			// rendszámlista bővítése, ha ilyen még nem volt rajta
			var rszlista = $("option");
			var elofordul = false;
			var rendszam = $("#rendszam").val();
			var oraallas = $("#oraallas").val();
			var csalas = false;
			if(autok[rendszam]) {
				if(autok[rendszam][autok[rendszam].length-1] > oraallas) {
					csalas = true;
				}
				autok[rendszam].push(oraallas);
			} else {
				$("#adatlista").append($("<option>").text(rendszam));
				autok[rendszam] = [oraallas];
			}
			if(csalas) throw "Illegális óraállás!";
		} catch(ex) {
			alert(ex);
		} finally {
			// lista frissítése
			var korabbi = $("#korabbi");
			korabbi.empty();
			for(var j=0; j<autok[rendszam].length; j++) {
				korabbi.append($("<li>").text(autok[rendszam][j]));
			}
		}
		e.preventDefault;
		return false;
	});
});