function addRow() {
    var checkvalidation = validate()
}

//check the name contains only alphabate and space
function validate() {
    var valid = /^[A-Za-z ]+$/;
    var name = document.getElementById('name').value;

    //check name contains only letter and white space
    if (!valid.test(name)) {
        alert('Invalid name');
        var clearForm = clearOperation()
    }
    else {
        var correct = showData()
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