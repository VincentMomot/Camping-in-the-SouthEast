const api = {
    //key: "e4ce42a714cb9c3a4f80a484e0b90750", //Todd's key
    key: "b8f53b07d67511ae3702eb0275e02472", //logan's key
    //key: "9eb415174fa06ab7744ba1ae33df75b1", //my key
    base: "https://api.openweathermap.org/data/2.5/" //used for onecall and forcast
}
var zipCode=localStorage.getItem("zipCode")
zip.textContent="Zip Code entered: " + zipCode;
var parkCoordLon=[];
var parkCoordLat=[];
var parkName=[];
var stateMap=[];
var parkImg=[];
var parkDescription=[];


// fetch(`${api.base}onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${api.key}`).then(function (onecallweather) {
//     return onecallweather.json()});

//     console.log(data)
