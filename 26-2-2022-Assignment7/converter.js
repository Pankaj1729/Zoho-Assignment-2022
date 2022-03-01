function intToRoman() {
    const chars = {
        1: "I",
        4: "IV",
        5: "V",
        9: "IX",
        10: "X",
        40: "XL",
        50: "L",
        90: "XC",
        100: "C",
        400: "CD",
        500: "D",
        900: "CM",
        1000: "M"
    };
    var num = document.getElementById('decimal').value;
    const keys = Object.keys(chars);
    let result = "";
    
    while (num !== 0) {
        for (let idx = keys.length - 1; idx >= 0; idx --) {
            let key = keys[idx];
            
            if (num - key >= 0) {
                num -= key;
                result += chars[key];
                break;
            }
        }
    }
    
    document.getElementById("romanAns").value = result;
};




function romanToInt() {
    
    var map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }
    var s = document.getElementById('roman').value;
    var numToReturn = 0;
    var i;
    for(i=0;i<s.length-1;i++) {
        if (map[s[i]] >= map[s[i+1]]) {
            numToReturn = numToReturn + map[s[i]]; 
        } else {
            numToReturn = numToReturn + (map[s[i+1]] - map[s[i]]);
            i++;
        }
    }
    
    if (i === s.length-1) {
        numToReturn = numToReturn + map[s[i]]; 
    }
    
    document.getElementById("decimalAns").value = numToReturn;
};