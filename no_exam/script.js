const form = document.querySelector("form");
const table = document.querySelector("table tbody");

form.addEventListener("submit", event => {
  event.preventDefault();
  const name = document.querySelector("#partname").value;
  const count = document.querySelector("#partcount").value;

  const newRow = table.insertRow();
  const nameCell = newRow.insertCell(0);
  const countCell = newRow.insertCell(1);
  nameCell.innerHTML = name;
  countCell.innerHTML = count;
});