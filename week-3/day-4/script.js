function onTabClick(event) {
  let activeTabs = document.querySelectorAll(".active");

  // deactivate existing active tab and panel
  activeTabs.forEach(function (tab) {
    tab.className = tab.className.replace("active", "");
  });

  // activate new tab and panel
  event.target.parentElement.className += " active";
  document.getElementById(event.target.href.split("#")[1]).className +=
    " active";
}

const element = document.getElementById("nav-tab");

element.addEventListener("click", onTabClick, false);

function calculateTip() {
  var billAmountValue = document.getElementById("billAmount");
  // creating new variable iuput
  var billAmountValue = billAmountEleemnt.value;
  var tipAmount = billAmountValue * 0.15;
  var outputElement = document.getElementById("output");
  outputElement.innerText = tipAmount;
}

function calculateSplitTip() {
 var allBillAmounts = document.getElementsByClassName("
 eachAmount");
 for (var counter = 0; counter < allBillAmounts.length; counter ++) {
//the logic as long as the billamounts <6 so.. maximum 6 */
var individuaalVal = allBillAmounts[counter].value;
var indivualTipAmount = individualVal
 }
}

counter = 6
             v
[0,1,2,3,4,5]