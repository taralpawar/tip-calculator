function calculate(tipPercent) {
  let bill = document.getElementById("bill").value;
  let people = document.getElementById("people").value;

  if (people == 0) {
    document.getElementById("error").innerHTML = "Cannot be zero";
    document.getElementById("peoplediv").style.border = "2px solid orange";
    return;
  }
  let tip = (parseInt(bill) * parseInt(tipPercent)) / 100;

  let tipPerPerson = parseInt(tip) / parseInt(people);
  let billPerPerson = parseInt(bill) / parseInt(people) + tipPerPerson;

  document.getElementById("tipValue").innerHTML = tipPerPerson;
  document.getElementById("billValue").innerHTML = billPerPerson;
}

function reset() {
  document.getElementById("bill").value = "";
  document.getElementById("people").value = "";
  document.getElementById("tipValue").innerHTML = "0.00";
  document.getElementById("billValue").innerHTML = "0.00";
  document.getElementById("peoplediv").style.border = "none";
  document.getElementById("error").innerHTML = "";
}
