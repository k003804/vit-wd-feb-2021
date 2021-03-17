function calculateTip() {
  var billAmountValue = document.getElementById("billAmount").value;
  var tipAmount = billAmountValue * 0.15;
  var outputElement = document.getElementById("output");
var tipPerpPerson = document.getElementsById("tipPerPerson").value;// grab number of people

var partytip = tipAmount / tipPerPerson;
// divide tip by number of people input
outputElement.innerText = "$" + tipAmount;
output2Element.innerText = "$" +partytip;
if (tipPerPerson > 0) {
  output2Element.innerText = "$" + partytip + "Tip Per Person";
// display tip amount per person
}



//add input field
// have input field break out by number of people]
// the purpose of .value;
// the purpose of console.log()?
// 