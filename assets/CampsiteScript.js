const api = {
    //key: "e4ce42a714cb9c3a4f80a484e0b90750", //Todd's key
    key: "b8f53b07d67511ae3702eb0275e02472", //logan's key
    //key: "9eb415174fa06ab7744ba1ae33df75b1", //my key
    base: "https://api.openweathermap.org/data/2.5/" //used for onecall and forcast
}
// var zipCode=localStorage.getItem("zipCode")
// zip.textContent="Zip Code entered: " + zipCode;
// var parkCoordLon=[33.4701,24.6598,34.7398,34.6047, 35.2847,33.6512,35.6532]
// var parkCoordLat=[-85.8133,-81.2744,-83.9369,-88.1909,-82.7270,-78.9306,-83.5070];
// var parkName=["Cheaha State Park", "Bahia Honda State Park", "Blood Mountain", "Tishomingo State Park", "Pigsah National Forest","Mrytle Beach State Park","Smoky Moutain National Park" ];
// var stateMap=[Al,Fl, GA, MS, NC, SC, TN];
// var parkImg=[<img src="assets/al_cheaha_state_park_pic.jpeg"></img>; <img scr="assets/fl_bahai_honda_state_park.jpg" >; <img src="assets/ga_blood_mountain_pic.jpeg">;<img scr="assets/ms_tishomingo_state_park"> <img scr="assets/nc_pigsah_national_forest_pic.jpg"></img>;img src="sc_myrtle_beach_state_park.jpg"></img>;<img src="tn_great_smoky_moutain_national_pic.jpeg">] 
// // var parkDescription = ["Located in Northern Alabama in the foothills of the Appalachain Mountain" is Alabama's oldest continuously operating state park.[2] Facilities include lodgings, a restaurant, campsites, and hiking trails.",
// "The hidden jewel of Florida, Bahai Honda State park offers something for everybody. Located on one of the Florida Keyes, The island is virtually uninhabited, being home to the 524-acre (212-hectare) Bahia Honda State Park.[1][2] Founded in 1961, the park occupies most of the island. The channel at the island's west end is one of the deepest natural channels in the Florida Keys."
// "Only an hour and half drive from Atlanta, Blood Mountain is the higest point of the Applachain Trail in Georgia. With an overlook of Blairsville and nearby parking."];
// "Tishomingo State Park is a public recreation area located in the foothills of the Appalachian Mountains in Tishomingo County, some 45 miles northeast of Tupelo, Mississippi. The major feature of the park is Bear Creek Canyon and its generous sandstone outcroppings."
// "The Pisgah National Forest is a land of mile-high peaks, cascading waterfalls, and heavily forested slopes. Comprised of over 500,000 acres, the Pisgah is primarily a hardwood forest with whitewater rivers, waterfalls and hundreds of miles of trails. This national forest is home of the first tract of land purchased under the Weeks Act of 1911 which led to the creation of the national forests in the eastern United States. It is also home of the first school of forestry in the United States, now preserved at the Cradle of Forestry in America historic site, and boasts two of the first designated wilderness areas in the east."
// "Ridge upon ridge of forest straddles the border between North Carolina and Tennessee in Great Smoky Mountains National Park. World renowned for its diversity of plant and animal life, the beauty of its ancient mountains, and the quality of its remnants of Southern Appalachian mountain culture, this is America's most visited national park."
// "Myrtle Beach State Park is a 312 acre state park located in Myrtle Beach, South Carolina on land donated by Myrtle Beach Farms in 1934. The park was the first South Carolina State Park to open in 1936. It was developed by the Civilian Conservation Corps, a New Deal Program created by President Franklin D. Roosevelt."
var parks = [{
    parkName:"Cheaha State Park",
    parkCoordLon:33.4701,
    parkCoordLat:-85.8133,
    img: "assets/al_cheaha_state_park_pic.jpeg",
    description: `Located in Northern Alabama in the foothills of the Appalachain Mountain" is Alabama's oldest continuously operating state park.[2] Facilities include lodgings, a restaurant, campsites, and hiking trails.`
},
{ 
    parkName: "Bahia Honda State Park",
    parkCoordLon: 33.4701,
    parkCoordlat:-81.2744,
    img: ,
    description: "The hidden jewel of Florida, Bahai Honda State park offers something for everybody. Located on one of the Florida Keyes, The island is virtually uninhabited, being home to the 524-acre (212-hectare) Bahia Honda State Park.[1][2] Founded in 1961, the park occupies most of the island. The channel at the island's west end is one of the deepest natural channels in the Florida Keys."
    ,

},
{ 
    parkName: "Blood Mountain",
    parkCoordLon: 34.7398,
    parkCoordlat: -83.9369,
    img: ,
    description: "Only an hour and half drive from Atlanta, Blood Mountain is the higest point of the Applachain Trail in Georgia. With an overlook of Blairsville and nearby parking."];
    ,

},
{
    parkName: ,
    parkCoordLon: 34.6047,
    parkCoordlat: ,
    img: ,
    description: ,

{ 
    parkName: ,
    parkname: ,
    parkCoordLon: ,
    parkCoordlat: ,
    img: ,
    description: ,
    
},
{ 
    parkName: ,
    parkname: ,
    parkCoordLon: ,
    parkCoordlat: ,
    img: ,
    description: ,
},
{ 
    parkName: ,
    parkname: ,
    parkCoordLon: ,
    parkCoordlat: ,
    img: ,
    description: ,
}]


// fetch(`${api.base}onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${api.key}`).then(function (onecallweather) {
//     return onecallweather.json()});

//     console.log(data)

