
var visible = false,
button = document.querySelector(".btn"),
pop = document.querySelector(".pop");

button.onclick = function() {
     if (visible === true) {
        pop.style.visibility = "hidden";
        visible = false;
} else {
        pop.style.visibility = "visible";
        visible = true;
       }
}
