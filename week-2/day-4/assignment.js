
var slide2 = 0

function left() {
    slide2--;
    document.getElementById("Class").style.transform = "translateX(-600px)"
    console.log(slide2);
}


function right() {
    slide2++;
    document.getElementById("Class").style.transform = "translateX(+600px)"
    console.log(slide2);
}
