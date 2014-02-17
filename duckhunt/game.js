// Your work goes here...
//assets/duckhunt.png
//ctx.drawImage(img,0,0);
function draw(){
	var canvas = document.getElementById('game'); 
	ctx = canvas.getContext('2d'); 

	var img = new Image();
  	img.onload = function(){
  		ctx.drawImage(img,0,270,80,130,20,120,240,390);
  		ctx.drawImage(img,100,700,800,200,0,400,800,200);
  	};
	img.src = 'assets/duckhunt.png';
}


