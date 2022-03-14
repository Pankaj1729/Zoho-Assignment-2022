function showImage(){
    var row = document.getElementById('row').value;
    var col = document.getElementById('col').value;

    if(row.length == 0){
        document.getElementById('sprite').style.backgroundPosition =   `-${col*130}px 0px`;
        document.getElementById('sprite').style.height = "340px";
        
    }

    else if(col.length == 0){
        document.getElementById('sprite').style.backgroundPosition =   `0px -${row*120}px`;
        document.getElementById('sprite').style.width = "780px";
    }

    else{
        document.getElementById('sprite').style.height = "105px";
        document.getElementById('sprite').style.width = "105px";
        document.getElementById('sprite').style.backgroundPosition =   `-${col*130}px -${row*120}px`;
    }
}