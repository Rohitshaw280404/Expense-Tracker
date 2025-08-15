document.getElementById("expense-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const date = document.getElementById("date").value;
  const category = document.getElementById("category").value;
  const description = document.getElementById("description").value;
  const amount = document.getElementById("amount").value;

  const table = document.getElementById("expense-table-body");
  const row = table.insertRow();

  row.insertCell(0).innerText = date;
  row.insertCell(1).innerText = category;
  row.insertCell(2).innerText = description;
  row.insertCell(3).innerText = `₹${amount}`;
});