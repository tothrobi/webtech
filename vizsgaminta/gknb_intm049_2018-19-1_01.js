function valtozas(e) {
	var sor = e.srcElement.parentNode.parentNode;
	var szamok = sor.querySelectorAll("input[type='number']");
	var zh1 = +szamok[0].value;
	var pzh1 = +szamok[1].value;
	var zh1v = zh1>pzh1?zh1:pzh1;
	var zh2 = +szamok[2].value;
	var pzh2 = +szamok[3].value;
	var zh2v = zh2>pzh2?zh2:pzh2;
	var osszes = zh1v + zh2v;
	sor.children[6].textContent = osszes;
	//sor.children[7].innerHTML = "<span class='" + (osszes>=6?"jo":"rossz") + "'>" + (osszes>=6?"aláírva":"megtagadva") +"</span>";
	sor.children[7].textContent = (osszes>=6?"aláírva":"megtagadva");
	sor.children[7].className = (osszes>=6?"jo":"rossz");
	var jegy;
	switch(osszes) {
		case 14:
		case 13:
			jegy = 5;
			break;
		case 12:
		case 11:
			jegy = 4;
			break;
		default:
			jegy = "-";
			break;
	}
	sor.children[8].textContent = jegy;
	sor.children[8].className = (osszes>=11?"jo":"rossz");
}

function hozzaad() {
	var torzs = document.getElementById("torzs");
	/*torzs.innerHTML = torzs.innerHTML+'<tr>'+
		'<td><input type="text" /></td>'+
		'<td><input type="text" pattern="[a-zA-Z0-9]{6}" maxlength="6" /></td>'+
		'<td><input type="number" min="0" max="7" value="0" /></td>'+
		'<td><input type="number" min="0" max="7" value="0" /></td>'+
		'<td><input type="number" min="0" max="7" value="0" /></td>'+
		'<td><input type="number" min="0" max="7" value="0" /></td>'+
		'<td>0</td>'+
		'<td><span class="rossz">megtagadva</span></td>'+
		'<td><span class="rossz">-</span></td>'+
	'</tr>';*/
	var sor = document.createElement("tr");
	for(var i=0; i<2; i++) {
		var cella = document.createElement("td");
		sor.appendChild(cella);
		var szoveg = document.createElement("input");
		cella.appendChild(szoveg);
		szoveg.type = "text";
	}
	sor.children[1].firstChild.pattern = "[a-zA-Z0-9]{6}";
	sor.children[1].firstChild.maxlength=6;
	for(var i=0; i<4; i++) {
		var cella = document.createElement("td");
		sor.appendChild(cella);
		var szam = document.createElement("input");
		cella.appendChild(szam);
		szam.type = "number";
		szam.min = "0";
		szam.max = "7";
	}
	for(var i=0; i<3; i++) {
		var cella = document.createElement("td");
		if(i>0) cella.className="rossz";
		sor.appendChild(cella);
	}
	sor.children[6].textContent = "0";
	sor.children[7].textContent = "megtagadva";
	sor.children[8].textContent = "-";
	torzs.appendChild(sor);
}

window.onload = function() {
	document.getElementById("urlap").onchange = valtozas;
	document.getElementById("hozzaad").onclick = hozzaad;
}