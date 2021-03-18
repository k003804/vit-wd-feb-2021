
function calculatebudget() {
    var hotelBudget = parseInt(document.getElementById("Hotel").value);
    var activitiesBudget = parseInt(document.getElementById("Activities").value);
    var transportationBudget = parseInt(document.getElementById("Transportation").value);
    var sizeBudget = parseInt(document.getElementById("Size").value);
    var output = document.getElementById("output")
    // output.value = parseInt(Hotelbudget) + parseInt(Activitiesbudget) + parseInt(Transportationbudget);
    output.innerText =(hotelBudget + activitiesBudget + transportationBudget) * sizeBudget;
    console.log(output);

    var info = document.getElementById("Information")
    console.log(Information);

    
    if(output.innerText > 2000 && output.innerText < 4000 ) {
        info.innerText = "London is the Answer!";
        }
        
    if(output.innerText > 4000 && output.innerText < 4000){
            info.innerText = "Seoul is the Answer!"
        }
        
    if(output.innerText > 6000 && output.innerText< 4000){
            info.innerText = "Tokyo is the Answer!"
        }
        
    if(output.innerText > 8000){
            info.innerText = "New York is the Answer!"
            
         }
    
    var link = document.getElementById("Link")

    if(output.innerText > 2000 && output.innerText < 4000 ) {
             location.href="file:///Users/junyoungpark/Desktop/vit-wd-feb-2021/week-3/day-4/London.html";
             }
         
}
