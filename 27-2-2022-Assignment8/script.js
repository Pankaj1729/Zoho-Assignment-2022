function showImage(){
    var width = document.getElementById('width').value;
    var height = document.getElementById('height').value;

    if(width.length == 0){
        console.log("width is empty");

        document.getElementById('sprite').style.backgroundPosition = "-780px -"+height+"px";
        document.getElementById('sprite').innerHTML = ` <table>
        <tbody>
        <tr> 
        <td> 
        ${document.getElementById('sprite').style.backgroundPosition =   `-0px -${height}px`}
        </td>
        <td> 
        ${document.getElementById('sprite').style.backgroundPosition =   `-130px -${height}px`}
        </td>
        <td> 
        ${document.getElementById('sprite').style.backgroundPosition =   `-260px -${height}px`}
        </td>
        <td> 
        ${document.getElementById('sprite').style.backgroundPosition =   `-390px -${height}px`}
        </td>
        <td> 
        ${document.getElementById('sprite').style.backgroundPosition =   `-520px -${height}px`}
        </td>
        </tr>
        </tbody>
        </table>
        `
    }
    // document.getElementById('sprite').innerHTML = table;ß

    else if(height.length == 0){
        // console.log("height is empty");
        document.getElementById('sprite').innerHTML = ` <table>
        <tbody>
        <tr> 
        <td> 
        ${document.getElementById('sprite').style.backgroundPosition =   `-${width}px 0px`}
        </td>
        </tr>
        <tr>
        <td> 
        ${document.getElementById('sprite').style.backgroundPosition =   `-${width}px -120px`}
        </td>
        </tr>
        <tr>
        <td> 
        ${document.getElementById('sprite').style.backgroundPosition =   `-${width}px -240px`}
        </td>
        </tr>
        </tbody>
        </table>
        `
    }

    else{
        document.getElementById('sprite').style.backgroundPosition =   `-${width}px -${height}px`;
    }
}