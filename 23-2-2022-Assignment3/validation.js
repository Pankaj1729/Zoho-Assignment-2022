function validate() {
    var valid = /^[A-Za-z ]+$/;
    var name = document.getElementById('name').value;

    //check name contains only letter and white space
    if (!valid.test(name)) {
        alert('Invalid name');
    }
    else {
        var name = document.getElementById('name').value;
        var dob = document.getElementById('dob').value;
        var gender = document.getElementById('gender').value;
        var mob = document.getElementById('mobno').value;

        var table = document.getElementById("tabledata");
        var table_row1 =
            `
                    <tr id="trow">
                        <td id="tdes">${'Name'}</td>
                        <td id="tim">${name}</td>
                    </tr>
                    `
        var table_row2 =
                   `
                    <tr id="trow">
                        <td id="tdes">${'Date of Birth'}</td>
                        <td id="tim">${dob}</td>
                    </tr>
                    `
        var table_row3 =
                   `  
                    <tr id="trow">
                        <td id="tdes">${'Gender'}</td>
                        <td id="tim">${gender}</td>
                    </tr>
                    `
        var table_row4 =
                    `
                    <tr id="trow">
                        <td id="tdes">${'Mobile Number'}</td>
                        <td id="tim">${mob}</td>
                    </tr>
                    `
        table.innerHTML += table_row1 + table_row2 + table_row3 + table_row4;
    }

}