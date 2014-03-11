var Lat = 42.4183; 
var Lng = -71.066124;


var xhr; 
var stationData; 
var red; 
var orange;
var blue; 

//this sets up the google map 
function start(){

	stationData(); 

	//init(); //gets schedule data 

	var location = new google.maps.LatLng(Lat, Lng);

	var mapOptions = {
	 center: location,
	 zoom: 12
	}; 

	map = new google.maps.Map(document.getElementById("map-canvas"), 
		mapOptions) 

	addBlue(); 

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

function stationData(){
	var redData = '[{"Line":"Red","Station":"Alewife","Lat":42.395428,"Lng":-71.142483},{"Line":"Red","Station":"Andrew","Lat":42.330154,"Lng":-71.057655},{"Line":"Red","Station":"Ashmont","Lat":42.284652,"Lng":-71.06448899999999},{"Line":"Red","Station":"Braintree","Lat":42.2078543,"Lng":-71.0011385},{"Line":"Red","Station":"Broadway","Lat":42.342622,"Lng":-71.056967},{"Line":"Red","Station":"Central Square","Lat":42.365486,"Lng":-71.103802},{"Line":"Red","Station":"Charles/MGH","Lat":42.361166,"Lng":-71.070628},{"Line":"Red","Station":"Davis","Lat":42.39674,"Lng":-71.121815},{"Line":"Red","Station":"Downtown Crossing","Lat":42.355518,"Lng":-71.060225},{"Line":"Red","Station":"Fields Corner","Lat":42.300093,"Lng":-71.061667},{"Line":"Red","Station":"Harvard Square","Lat":42.373362,"Lng":-71.118956},{"Line":"Red","Station":"JFK/UMass","Lat":42.320685,"Lng":-71.052391},{"Line":"Red","Station":"Kendall/MIT","Lat":42.36249079,"Lng":-71.08617653},{"Line":"Red","Station":"North Quincy","Lat":42.275275,"Lng":-71.029583},{"Line":"Red","Station":"Park Street","Lat":42.35639457,"Lng":-71.0624242},{"Line":"Red","Station":"Porter Square","Lat":42.3884,"Lng":-71.11914899999999},{"Line":"Red","Station":"Quincy Adams","Lat":42.233391,"Lng":-71.007153},{"Line":"Red","Station":"Quincy Center","Lat":42.251809,"Lng":-71.005409},{"Line":"Red","Station":"Savin Hill","Lat":42.31129,"Lng":-71.053331},{"Line":"Red","Station":"Shawmut","Lat":42.29312583,"Lng":-71.06573796000001},{"Line":"Red","Station":"South Station","Lat":42.352271,"Lng":-71.05524200000001},{"Line":"Red","Station":"Wollaston","Lat":42.2665139,"Lng":-71.0203369}]';
	var blueData = '[{"Line":"Blue","Station":"Airport"," Lat":42.374262," Lng":-71.030395},{"Line":"Blue","Station":"Aquarium"," Lat":42.359784," Lng":-71.051652},{"Line":"Blue","Station":"Beachmont"," Lat":42.39754234," Lng":-70.99231944},{"Line":"Blue","Station":"Bowdoin"," Lat":42.361365," Lng":-71.062037},{"Line":"Blue","Station":"Government Center"," Lat":42.359705," Lng":-71.05921499999999},{"Line":"Blue","Station":"Maverick"," Lat":42.36911856," Lng":-71.03952958000001},{"Line":"Blue","Station":"Orient Heights"," Lat":42.386867," Lng":-71.00473599999999},{"Line":"Blue","Station":"Revere Beach"," Lat":42.40784254," Lng":-70.99253321},{"Line":"Blue","Station":"State Street"," Lat":42.358978," Lng":-71.057598},{"Line":"Blue","Station":"Suffolk Downs"," Lat":42.39050067," Lng":-70.99712259},{"Line":"Blue","Station":"Wonderland"," Lat":42.41342," Lng":-70.991648},{"Line":"Blue","Station":"Wood Island"," Lat":42.3796403," Lng":-71.02286539000001}]';
	var orangeData = '[{"Line":"Orange","Station":"Back Bay"," Lat":42.34735," Lng":-71.075727},{"Line":"Orange","Station":"Chinatown"," Lat":42.352547," Lng":-71.062752},{"Line":"Orange","Station":"Community College"," Lat":42.373622," Lng":-71.06953300000001},{"Line":"Orange","Station":"Downtown Crossing"," Lat":42.355518," Lng":-71.060225},{"Line":"Orange","Station":"Forest Hills"," Lat":42.300523," Lng":-71.113686},{"Line":"Orange","Station":"Green Street"," Lat":42.310525," Lng":-71.10741400000001},{"Line":"Orange","Station":"Haymarket"," Lat":42.363021," Lng":-71.05829},{"Line":"Orange","Station":"Jackson Square"," Lat":42.323132," Lng":-71.099592},{"Line":"Orange","Station":"Malden Center"," Lat":42.426632," Lng":-71.07411},{"Line":"Orange","Station":"Mass Ave"," Lat":42.341512," Lng":-71.083423},{"Line":"Orange","Station":"North Station"," Lat":42.365577," Lng":-71.06129},{"Line":"Orange","Station":"Oak Grove"," Lat":42.43668," Lng":-71.07109699999999},{"Line":"Orange","Station":"Roxbury Crossing"," Lat":42.331397," Lng":-71.095451},{"Line":"Orange","Station":"Ruggles"," Lat":42.336377," Lng":-71.088961},{"Line":"Orange","Station":"State Street"," Lat":42.358978," Lng":-71.057598},{"Line":"Orange","Station":"Stony Brook"," Lat":42.317062," Lng":-71.104248},{"Line":"Orange","Station":"Sullivan"," Lat":42.383975," Lng":-71.076994},{"Line":"Orange","Station":"Tufts Medical"," Lat":42.349662," Lng":-71.063917},{"Line":"Orange","Station":"Wellington"," Lat":42.40237," Lng":-71.077082}]'; 

	window.red = JSON.parse(redData); 
	window.blue = JSON.parse(blueData); 
	window.orange = JSON.parse(orangeData); 
}


function addBlue(){

	var infoWindowContent = []; 
	for (i = 0; i < blue.length; i++){
		infoWindowContent.push(blue[i]["Station"]); 
	}

	var infowindow = new google.maps.InfoWindow({
      maxWidth: 160
    });

	for (i = 0; i < blue.length; i++){ 

		var stationLocation = new google.maps.LatLng(blue[i][" Lat"], blue[i][" Lng"]); 

		var marker = new google.maps.Marker({
			position: stationLocation, 
			map: map, 
			title: blue[i]["Station"]
		});

		google.maps.event.addListener(marker, 'click', (function(marker, i) {
        	return function() {
          	infowindow.setContent(infoWindowContent[i]);
          	infowindow.open(map, marker);
        	}
      	})(marker, i));
	}
}

function addRed(){

}

function addOrange(){

}













