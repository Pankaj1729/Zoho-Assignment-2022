// var pos = document.getElementById("img").style.right;
// var stopPosition;
// console.log(pos);
// function moveImage() {
//     document.getElementById("img").style.left = "+1px";
//     stopPosition = setInterval(moveImage, 1000);
// }

// function stopImage() {
//     clearInterval(stopPosition);
// }

function disp(){
    //number of step for each timer
    var step = 1;
    var x = document.getElementById('img').offsetLeft;
    x = x + step;
    document.getElementById('img').style.left = x + "px";
}

function moveImage(){
    disp();
    timer = setTimeout('moveImage()',10);
}

function stopImage(){
    clearTimeout(timer);
}

function resetImage(){
    clearTimeout(timer);
    document.getElementById('img').style.left = "10px";
}