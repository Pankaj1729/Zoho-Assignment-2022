// javascript change image into text on click
var arr = [["Zoho Corporation Private Limited", "Sridhar Vembu", "1996"], ["Google", "Sundar Pichai", "1998"], ["Amazon", "Jeff Bezos", "1994"], ["Meta", "Mark Zuckerberg", "2004"], ["Netflix", "Wilmot Reed Hastings Jr.", "1997"], ["Microsoft", "Satya Nadella", "1975"], ["Salesforce", "Marc Benioff", "1999"], ["Tata Consultancy Services", "Rajesh Gopinathan", "1968"], ["Adobe Inc.", "Shantanu Narayen", "1982"], ["Amdocs", "Shuky Sheffer", "1982"]]
function imageChange(ids) {
    if (ids == "img1") {
        document.getElementById("img1").innerHTML = "<p>Organization Name: " + arr[0][0] + "<br>CEO: " + arr[0][1] + "<br>Year of Start: " + arr[0][2] + "</p>";
    }
    else if (ids == "img2") {
        document.getElementById("img2").innerHTML = "<p>Organization Name: " + arr[1][0] + "<br>CEO: " + arr[1][1] + "<br>Year of Start: " + arr[1][2] + "</p>";
    }
    else if (ids == "img3") {
        document.getElementById("img3").innerHTML = "<p>Organization Name: " + arr[2][0] + "<br>CEO: " + arr[2][1] + "<br>Year of Start: " + arr[2][2] + "</p>";
    }
    else if (ids == "img4") {
        document.getElementById("img4").innerHTML = "<p>Organization Name: " + arr[3][0] + "<br>CEO: " + arr[3][1] + "<br>Year of Start: " + arr[3][2] + "</p>";
    }
    else if (ids == "img5") {
        document.getElementById("img5").innerHTML = "<p>Organization Name: " + arr[4][0] + "<br>CEO: " + arr[4][1] + "<br>Year of Start: " + arr[4][2] + "</p>";
    }
    else if (ids == "img6") {
        document.getElementById("img6").innerHTML = "<p>Organization Name: " + arr[5][0] + "<br>CEO: " + arr[5][1] + "<br>Year of Start: " + arr[5][2] + "</p>";
    }
    else if (ids == "img7") {
        document.getElementById("img7").innerHTML = "<p>Organization Name: " + arr[6][0] + "<br>CEO: " + arr[6][1] + "<br>Year of Start: " + arr[6][2] + "</p>";
    }
    else if (ids == "img8") {
        document.getElementById("img8").innerHTML = "<p>Organization Name: " + arr[7][0] + "<br>CEO: " + arr[7][1] + "<br>Year of Start: " + arr[7][2] + "</p>";
    }
    else if (ids == "img9") {
        document.getElementById("img9").innerHTML = "<p>Organization Name: " + arr[8][0] + "<br>CEO: " + arr[8][1] + "<br>Year of Start: " + arr[8][2] + "</p>";
    }
    else {
        document.getElementById("img10").innerHTML = "<p>Organization Name: " + arr[9][0] + "<br>CEO: " + arr[9][1] + "<br>Year of Start: " + arr[9][2] + "</p>";
    }

}

