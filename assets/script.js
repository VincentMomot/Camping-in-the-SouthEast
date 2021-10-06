var shw = 0;

button.addEventListener("click", show)
function show() {
    console.log("here");
    if (shw == 0) {
        showMe.style.display = "block";
        shw++;
    }
    else {
        showMe.style.display = "none";
        shw--;
    }
}