// var slider  = document.getElementsByClassName('toolbarbutton')[0].getBoundingClientRect();
// // var pos = slider.left;
// // console.log(pos);

// using querySelector

// var slider = document.querySelector('.toolbarbutton').getBoundingClientRect();
// var pos = slider.left;
// console.log(typeof pos);
var pos = 1;

var change = document.querySelector('.toolbarbutton');

function decreaseSlider(){
    var curLeft = change.getBoundingClientRect().left;
    change = document.querySelector('.toolbarbutton');
    if(curLeft>362){
        var leftPos = curLeft - 1;
        change.style.left = leftPos + 'px';
        pos--;
       document.getElementById('move').innerHTML =  pos;
       document.getElementById('topValue').innerHTML =  pos;
    }
    
}

function increaseSlider(){
    curLeft = change.getBoundingClientRect().left;
    change = document.querySelector('.toolbarbutton');
    if(curLeft<1000){
        leftPos = curLeft + 1;
        change.style.left = leftPos + 'px'; 
        pos++;
        document.getElementById('move').innerHTML = pos;
        document.getElementById('topValue').innerHTML =  pos;
    }

}

function leftMostPos(){
    change.style.left = 362 + 'px';
    pos = 1;
    document.getElementById('move').innerHTML = pos;
    document.getElementById('topValue').innerHTML =  pos;

}


function rightMost(){
    change.style.left = 1000 + 'px';
    pos = 1000;
    document.getElementById('move').innerHTML = pos;
    document.getElementById('topValue').innerHTML =  pos;
}

document.querySelector('.toolbarlist_rht .area').onclick = rightMost;
document.querySelector('.toolbarlist_lft input').onclick = leftMostPos;
document.getElementById('lft').onclick = decreaseSlider;
document.getElementById('rht').onclick = increaseSlider;

