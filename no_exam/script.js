class Alkatresz {
  constructor(name, count) {
    this.name = name;
    this.count = count;
  }
}
const form = document.querySelector("form");
const table = document.querySelector("table tbody");
let totalCount = 0;

form.addEventListener("submit", event => {
  event.preventDefault();
  const name = document.querySelector("#partname").value;
  const count = document.querySelector("#partcount").value;
  const part = new Alkatresz(name, count);

  const newRow = table.insertRow();
  const nameCell = newRow.insertCell(0);
  const countCell = newRow.insertCell(1);
  nameCell.innerHTML = part.name;
  countCell.innerHTML = part.count;
  totalCount += parseInt(count);
  alert("Összesen " + totalCount + " alkatrészünk van!");
});