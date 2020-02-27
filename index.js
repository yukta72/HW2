
function signup() {

    firstName=document.getElementById("FirstName").value;

    lastName=document.getElementById("LastName").value;

    email=document.getElementById("Email").value;

    nameExpression= /^[A-Za-z]+$/;

   emailExpresson=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(firstName=="" || lastName=="" || email=="") {
        alert("Must enter all fields");
        return false;
    }

    else if(!nameExpression.test(firstName))
    {
        alert("Enter letters only for first name");
        return false;
    }

    else if(!nameExpression.test(lastName))
    {
        alert("Enter letters only for last name");
        return false;
    }

    else if(!emailExpresson.test(email))
    {
        alert("Please enter a valid email");
        return false;
    }

    else{
        alert("You signed up successfully");
    }

}
