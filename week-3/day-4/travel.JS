
function calculatebudget() {
    var Hotelbudget = parseInt(document.getElementById("Hotel").value);
    var Activitiesbudget = parseInt(document.getElementById("Activities").value);
    var Transportationbudget = parseInt(document.getElementById("Transportation").value);
    document.getElementById("output").value = parseInt(Hotelbudget) + parseInt(Activitiesbudget) + parseInt(Transportationbudget);
    console.log("output");
}



