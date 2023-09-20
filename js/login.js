function validate() {
    //alert("Password should be more than 4 characters");
    password = document.forms["login"]["pass"].value;
    var isValid = true;
    if (password.length < 5) {
        //document.write("Password should be more than 4 characters");
        passError.textContent = 'Password should be more than 4 characters';
        isValid = false;

    }
    if (isValid) {
        // Submit the form if validation passes
        form.submit();
    }
}