function addRow() {
    var checkvalidation = validate()
}

//check the name contains only alphabate and space
function validate() {
    var nameValid = /^[A-Za-z ]+$/;
    var name = document.getElementById('name').value;

    let dobValid = document.getElementById('dob').value;

    var genderValid = document.getElementById('gender').options[gender.selectedIndex].text;

    let mobNoValid = /^[1-9]\d{9}$/;
    var number = document.getElementById('mobno').value;

    //check name contains only letter and white space
    if (!nameValid.test(name)) {
        alert('Invalid name');
        var clearForm = clearOperation();
    }

    if(dobValid == ""){
        alert('Date of Birth is not entered');
        clearForm = clearOperation();
    }

    if(genderValid == 'Select...'){
        alert('Gender not selected');
        clearForm = clearOperation();
    }

    if(!mobNoValid.test(number)){
        alert('Mobile Number is not valid');
        clearForm = clearOperation();
    }

    else {
        var correct = showData();
    }
}

//It data is correct Show Its values
function showData() {
    document.querySelector('#tvalue1').innerText = document.getElementById('name').value;
    document.querySelector('#tvalue2').innerText = document.getElementById('dob').value;
    var gender = document.getElementById('gender');
    document.querySelector('#tvalue3').innerText = gender.options[gender.selectedIndex].text;
    document.querySelector('#tvalue4').innerText = document.getElementById('mobno').value;
}


//clear form value after reset
function clearOperation() {
    document.getElementById("sample").reset();
  }