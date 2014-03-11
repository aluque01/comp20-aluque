var Lat = 42.4183; 
var Lng = -71.066124;


var xhr; 
var stationData; 


//this sets up the google map 
function start(){

	init(); //gets schedule data 

	var location = new google.maps.LatLng(Lat, Lng);

	var mapOptions = {
	 center: location,
	 zoom: 12
	}; 

	var map = new google.maps.Map(document.getElementById("map-canvas"), 
		mapOptions) 

}

//This thing finds you 
function locate(){
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position){
			Lat = position.coords.latitude; 
			Lng = position.coords.longitude; 
			console.log(Lat); 
			console.log(Lng); 
		});
	} else {
		alert("Looks like the NSA can't find you."); 
	}
}

//gets information about lines 
function init(){
	xhr = new XMLHttpRequest();
	xhr.open("get", "http://mbtamap.herokuapp.com/mapper/rodeo.json", true);
	xhr.onreadystatechange = dataReady;
	xhr.send(null); 
}

function dataReady(){
	if (xhr.readyState == 4 && xhr.status == 200){
		stationData = JSON.parse(xhr.responseText);
		console.log(stationData); 
	} else if (xhr.readyState == 4 && xhr.status == 500) {
		error();  
	}
}

function error(){
	var overlay = document.createElement("div");
	overlay.setAttribute("id","overlay");
	overlay.innerHTML = "<p>Oops! </br> MBTA data was lost in translation! </br> Please reload the page! </p>"
	document.body.appendChild(overlay);
}










