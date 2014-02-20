// Your work goes here...
function draw(){
	var canvas = document.getElementById('game'); 
	ctx = canvas.getContext('2d'); 

	var img = new Image();
  	img.onload = function(){
      ctx.fillStyle = "#87CEEB"; 
      ctx.fillRect(0,0,800,600); //sky 
  		ctx.drawImage(img,0,270,80,130,20,120,240,390);  //tree
  		ctx.drawImage(img,100,700,800,200,0,400,800,200); //grass and dirt
  		ctx.drawImage(img,0,0,60,45,40,460,160,120); //dog
  		ctx.drawImage(img,300,155,35,35,400,70,70,70); //bird
  		ctx.drawImage(img,170,155,35,35,500,200,70,70); //bird
  		ctx.drawImage(img,80,155,35,35,300,130,70,70); //bird
  		ctx.drawImage(img,130,155,35,35,350,200,70,70); //bird
  		ctx.drawImage(img,339,115,35,35,670,80,70,70); //bird
  	};
	img.src = 'assets/duckhunt.png';
}



