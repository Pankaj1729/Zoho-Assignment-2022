var canvas = document.getElementById("gameBase");

var context = canvas.getContext("2d");

const width = 800;
const height = 400;

canvas.width = width;
canvas.height = height;

var img = new Image();
img.src = 'cactus.png';


var trexStartX = 30;
var trexStartY = 350;

var dy = 20;
const trexImg = new Image();
trexImg.src = 'trex.png';
var flag  = 0;

var x = 750;
var x1 = 1200;


var timer;
var timer1;
document.addEventListener('keydown', function(e){
    if(e.keyCode == 32 || e.keyCode == 38){
        clearInterval(timer);
        if(timer1){
            clearInterval(timer1);
        }
        timer1 = setInterval(changeTrexPos,50);
    }
  });

  window.addEventListener("contextmenu", e => e.preventDefault());
 
  function animate() {
      requestAnimationFrame(animate);
      context.clearRect(30, 0, width, height);
      
      imageDraw(trexStartY);
      checkCrash(x, 350, x1, 340, trexStartX, trexStartY);
      context.drawImage(img, x, 350, 50, 50);
      context.drawImage(img, x1, 340, 55, 70);
      x -= 1;
      x1 -= 1;
      if (x + img.width < 0) {
          x = 750;
      }
      if (x1 + img.width < 0) {
          x1 = 1200;
      }
  }




function changeTrexPos(){
    
    if(trexStartY>230 ){
        if(trexStartY == 350){
            if(flag == 0){
                trexStartY-= dy;
            }
            flag = 1;
        }
        else{
            trexStartY-= dy;
        }
     
        // console.log('inside change',trexStartY)
    }

    if(trexStartY==230){
        clearInterval(timer1);
        timer = setInterval(originalPos,50);
    }
    
}


function checkCrash(x, y, x1, y1, trexX, trexY){
    if((x+70 == trexX+trexImg.width && trexY>=y) || (x1+70 == trexX+trexImg.width && (y1 <= trexY && trexY<=height))){
        var img1 = new Image();
        img1.src = 'https://www.pngitem.com/pimgs/m/21-214431_game-over-png-game-over-transparent-text-png.png';
        context.drawImage(img1, 400, 200, 100, 100);
        // alert("Game Over");
        location.reload();
    }
}

function imageDraw1(){
    context.drawImage(trexImg, trexStartX, trexStartY, 50, 50);
    document.addEventListener('keydown',function(e){
        animate();
    });
}

function imageDraw(trexStartY){
    context.drawImage(trexImg, trexStartX, trexStartY, 50, 50);
}



function originalPos(){
    if(trexStartY<350 ){
        trexStartY+=dy;
        // console.log(trexStartY);
    }

    if(trexStartY == 350 ){
        flag = 0;
        clearInterval(timer);
        clearInterval(timer1);
        
    }
    
   
}

window.onload = imageDraw1;











































// function moveCactus() {
//     // clear the canvas

//     context.clearRect(0, 0, width, height);

// }

// function imageDraw(i){
//     context.clearRect(0, 0, width, height);

//     context.beginPath();
//     context.fillStyle = "black";
//     context.fillRect(0, 0, width, height);

//     var speed = 5;
//     if(i>0)
//     i-=speed;
//     else
//     i = 750;
//     context.drawImage(img, i, 350, 50, 50);
// }
// var i = 750;
// setInterval(function(){imageDraw(i)},35);





// var canvas = document.getElementById("gameBase");

// var img = new Image();

// img.src = 'cactus.png';

// var canvasXSize = 800;
// var canvasYSize = 400;
// var speed = 30;
// var scale = 1.05;


// //Start

// change in x-co
// var dx = 0.75;
// var imgW;
// var imgH;
// var x = 0;
// var clearX;
// var clearY;

// var context;

// img.onload = function(){
//     imgW = img.width * scale;
//     imgH = img.height * scale;

//     if(imgW > Canvas)
// }

