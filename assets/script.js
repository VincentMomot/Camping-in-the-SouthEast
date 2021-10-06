var shw = 0;

button.addEventListener("click", show) //this is for the dropdown
zip.addEventListener('keypress', enter) //this is the textbox

if (localStorage.getItem("zipCode") != null) {
    zip.placeholder=localStorage.getItem("zipCode");
}

//this shows and hides the dropdown menu
function show() {
    if (shw == 0) {
        showMe.style.display = "block";
        shw++;
    }
    else {
        showMe.style.display = "none";
        shw--;
    }
    console.log(shw)
}

if (localStorage.getItem("LastParkSearch") != null) {
    var last = localStorage.getItem("LastParkSearch")
    lastPark.textContent = "Return to last search: " + last;
}
else {
    lastPark.textContent = "Visit a state below to see what you can find!"
}

showMe.addEventListener("click", localSite)

function localSite(event) {
    var last = event.target.textContent;  
    localStorage.setItem("LastParkSearch", last);
}

function enter(event) {
    if (event.keyCode == 13) { //enter button to search
        var zipCode=zip.value;
        zip.style.backgroundColor="green";
        localStorage.setItem("zipCode",zipCode);
    }
}