const api = {
    //key: "e4ce42a714cb9c3a4f80a484e0b90750", //Todd's key
    key: "b8f53b07d67511ae3702eb0275e02472", //logan's key
    //key: "9eb415174fa06ab7744ba1ae33df75b1", //my key
    base: "https://api.openweathermap.org/data/2.5/" //used for onecall and forcast
}
var zipCode = localStorage.getItem("zipCode")
zip.textContent = "Zip Code entered: " + zipCode;

state2load=localStorage.getItem("LastParkSearch");
console.log(state2load);


var parkCoordLon = [-84.386330];
var parkCoordLat = [33.753746];
var parkName = [];
var stateMap = [];
var parkImg = [];
var parkDescription = [];
const el = [d1, d2, d3, d4, d5, d6, i1, i2, i3, i4, i5, i6, t1, t2, t3, t4, t5, t6];
var icon;
var tempF;
var day;

fetch(`${api.base}onecall?lat=${parkCoordLat[0]}&lon=${parkCoordLon[0]}&appid=${api.key}`).then(function (onecallweather) {
    return onecallweather.json()
}).then(function (oneCallData) {
    console.log(oneCallData)
    var weather = oneCallData.daily[0].weather[0].id;
    weatherIcon(weather)
    i0.textContent = icon;
    temperature = oneCallData.daily[0].temp.day;
    tempConvert(temperature);
    t0.textContent = tempF + " °F";

    for (var i = 0; i < 6; i++) {
        var dateUnix = new Date(oneCallData.daily[i + 1].dt * 1000);
        timeconvert(dateUnix);
        el[i].textContent = weekDay

        var weather = oneCallData.daily[i].weather[0].id;
        weatherIcon(weather)
        el[i + 6].textContent = icon;

        temperature = oneCallData.daily[i].temp.day;
        tempConvert(temperature);
        el[i+12].textContent = tempF + " °F";

    }


});
//time converter
function timeconvert(dateUnix) {
    day = dateUnix.getDay();
    dow = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"]
    weekDay = dow[day];
}

//creates the weather icons
function weatherIcon(weather) {
    if (weather > 800) {
        icon = String.fromCodePoint(0x1F325);
    }
    else if (weather == 800) {
        icon = String.fromCodePoint(0x2600);
    }
    else if (weather > 299 && weather < 600) {
        icon = String.fromCodePoint(0x1F327);
    }
    else if (weather < 300) {
        icon = String.fromCodePoint(0x26C8);
    }
    else if (weather > 599 && weather < 700) {
        icon = String.fromCodePoint(0x1F328);
    }
    else {
        icon = String.fromCodePoint(0x1F32B);
    }
}

var tempF;
function tempConvert(temperature) {
    tempF = Math.round((temperature - 273.15) * 9 / 5 + 32);
}