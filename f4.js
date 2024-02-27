function clearErrors() {
    var errors = document.getElementsByClassName('formerror');
    for (let item of errors) {
        item.innerHTML = "";
    }
}

function seterror(id, error) {
    var element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
}

function validateForm() {
    var returnval = true;
    clearErrors();

    var employeeID = document.forms['myForm']["employeeID"].value;
    if (employeeID.length < 5) {
        seterror("employeeID", "Employee ID must be at least 5 characters long.");
        returnval = false;
    }

    var name = document.forms['myForm']["name"].value;
    if (name.length < 5) {
        seterror("name", "Name must be at least 5 characters long.");
        returnval = false;
    }

    var email = document.forms['myForm']["email"].value;
    if (email.length < 15) {
        seterror("email", "Email must be at least 15 characters long.");
        returnval = false;
    }
    var name = document.forms['myForm']["name"].value;
    if (Experience.length < 5) {
        seterror("Experience", "Name must be at least 5 characters long.");
        returnval = false;
    }

    return returnval;
}
