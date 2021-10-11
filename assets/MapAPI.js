// setting map options

var mylatlng = { lat: 33.7490, lng: -84.3880};
var mapOptions = {
    center: mylatlng,
    zoom: 7,
    // mapTypeId: google.maps.MapTypeId.ROADMAP
};

//creates actual map on screen
let map;
function initMap() {
    map = new google.maps.Map(document.getElementById("googleMap"),mapOptions)  
}

// // directionsService = new google.maps.directionsService();

// // directions render

// var directionsDisplay = new google.maps.directionsRenderer();

// // bind the directions to the map
// directionsDisplay.setMap(map);

//function

function clacRoute() {
    var request = {
        origin: document.getElementById("from").value,
        destination: document.getElementById("to").value,
        travelMode: google.maps.travelMode.DRIVING,
        unitSystem: google.maps.unitSystem.IMPERIAL,
    }    
// pass the request
directionsService.route (request, (result, status) =>{
    if (status == google.maps.directionsService.OK){

    const output = document.querySelector('#output')
    output.innerHTML = "<div class='alert-info'> from: " + document.getElementById("from").value + ".<br />to: " + document.getElementById("to").value + ". <br /> Driving distance" + result.routes[0].legs[0].distance.text + "<br />Duration <i class='fas fa-hourglass-start'></i>: " + result.routes[0].legs[0].duration.text + ". </div>" 

// direction display
    directionsDisplay.setDirections(results);
} else {
    directionsDisplay.setDirections({ routes:[]});

    map.setCenter(latlng);
// error message 
    output.innerHTML = "<div class= 'alert danger'><i class= 'fas fa-exclamation-triangle></i> You cant drive that far. </div>"
} 

});
}

// creates auto complete
var options = {
    types: ['(cities)']
}

var input1 = document.getElementById("from");


var submitButton = document.querySelector ("#submitButton")
    submitButton.addEventListener("click", function (event) {
        event.preventDefault()
        console.log ("button works") 
    
// var autocomplete1 = new google.maps.places.autocomplete1(input1, options)

 var input2 = document.getElementById("to");
// var autocomplete2 = new google.maps.places.autocomplete2(input2, options)

console.log (input1.value)
console.log (input2.value)
    })
