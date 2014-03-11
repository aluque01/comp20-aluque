var Lat = 0; 
var Lng = 0;



function start(){
	var location = new google.maps.LatLng(Lat, Lng);

	var mapOptions = {
	 center: location,
	 zoom: 2
	}; 

	var map = new google.maps.Map(document.getElementById("map-canvas"), 
		mapOptions)

	locate(); 

}


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
