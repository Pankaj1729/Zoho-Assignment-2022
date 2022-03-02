// let ua = detect.parse(navigator.userAgent);


function get_browser() {
    var ua=navigator.userAgent;
    var tem;

    // we find the browser name here
    // msai for Microsoft Internet Explorer
    //trident for Internet Explorer
    //i for ipad
    var M=ua.match(/(opera|chrome|safari|firefox|Edge|msie|trident(?=\/))\/?\s*(\d+)/i) || []; 

    //if browser is Internet Explorer

    if(/trident/i.test(M[1])){
        tem=/\brv[ :]+(\d+)/g.exec(ua) || []; 
        document.querySelector('#browsername').innerText = `${'Internet Explorer'}`;
    document.querySelector('#browserversion').innerText = `${tem[1]||''}`;
        }   

    // if browser is opera
    if(M[1]==='Opera'){
        tem=ua.match(/\bOPR|Edge\/(\d+)/)
        if(tem!=null)   {
        document.querySelector('#browsername').innerText = `${'Opera'}`;
    document.querySelector('#browserversion').innerText = `${tem[1]}`;
    }
        }   
    M=M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
  
    // get version from ua string
    if((tem=ua.match(/version\/(\d+)/i))!=null) {M.splice(1,1,tem[1]);}
    document.querySelector('#browsername').innerText = `${M[0]}`;
    document.querySelector('#browserversion').innerText = `${M[1]}`;
 }

get_browser();

document.querySelector('#screenwidth').innerText = `${screen.width}`;
document.querySelector('#screenheight').innerText = `${screen.height}`;
