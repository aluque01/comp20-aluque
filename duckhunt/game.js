// Your work goes here...
//assets/duckhunt.png
//ctx.drawImage(img,0,0);
function draw(){
	var canvas = document.getElementById('game'); 
	ctx = canvas.getContext('2d'); 

	var img = new Image();
  	img.onload = function(){
  		ctx.drawImage(img,0,0);
  	};
	img.src = 'assets/duckhunt.png';
}


