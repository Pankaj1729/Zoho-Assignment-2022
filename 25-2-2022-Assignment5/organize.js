var slider_content = document.getElementById('box');

//images in an array
var image = ["https://upload.wikimedia.org/wikipedia/commons/b/b2/Zui-zoho-logo-sample.jpg", "https://cdn.vox-cdn.com/thumbor/ULiGDiA4_u4SaK-xexvmJVYUNY0=/0x0:640x427/1400x1050/filters:focal(0x0:640x427):format(jpeg)/cdn.vox-cdn.com/assets/3218223/google.jpg", "http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG", "https://static.dezeen.com/uploads/2021/11/meta-facebook-rebranding-name-news_dezeen_2364_col_hero2.jpg", "https://assets.brand.microsites.netflix.io/assets/7dc497e2-4975-11ec-a9ce-066b49664af6_cm_1440w.jpg?v=5", "https://pbs.twimg.com/media/EyjQfGYU8AEs0xE.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/2560px-Salesforce.com_logo.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tata_logo.svg/1116px-Tata_logo.svg.png", "https://logos-world.net/wp-content/uploads/2020/07/Adobe-Logo.png", "https://seekvectorlogo.com/wp-content/uploads/2019/03/amdocs-vector-logo.png"];

var i = image.length;


//function for previous slide

function previousImage(){
  if(i < image.length+1 && i>1){
    i = i - 1;
  }
  else{
    i = image.length;
  }
  slider_content.innerHTML = "<img src=" + image[i - 1] + ">";
}

//fuction for next slide

function nextImage() {
  if (i < image.length) {
    i = i + 1;
  }
  else {
    i = 1;
  }

  slider_content.innerHTML = "<img src=" + image[i - 1] + ">";
}