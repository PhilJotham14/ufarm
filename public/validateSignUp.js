function printError(elemId, hintMsg){
    document.getElementById(elemId).innerHTML = hintMsg;
}

function signUp(){
    var username = document.mydata.username.value;
    var email = document.mydata.email.value;
    var password= document.mydata.password.value;

    // ___ Defining error varriables with default value
    var username_err = email_err  = password_err = true;

    // _______ validating username name
    if(username === ""){
        printError("username_err", "Username should not be left empty");
        const errId = document.getElementById('username');
        errId.style.border = '1px solid red';
    }
    else {
        var regexii = /^[a-zA-Z0-9]+$/;
        if(regexii.test(username) === false){
            printError("username_err", "Username should contain Alphanumeric characters.");
            // const errId = document.getElementById('username');
            // errId.style.border = '1px solid red';
        }else{
            printError("username_err", "");
            username_err = false;
        }
    }
    // Regex below is for alphanumeric between 5 and 50 characters.
    // var regexii = /^[a-zA-Z0-9_]{5,50}$/;
    // __________ Validating email
    if(email === ""){
        printError("email_err", "Email cannot be left Empty");
        const errId = document.getElementById('email');
        errId.style.border = '1px solid red';
    }else{
        var letters = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;;
        if(letters.test(email) === false){
            printError("email_err", "Invalid Email(Include @)")
            const errId = document.getElementById('email');
            errId.style.border = '1px solid red';
        }else{
            printError("email_err", "");
            email_err = false;
        }
    }

     // _______ validating password
     if(password === ""){
        printError("password_err", "Password cannot be left Empty");
        const errId = document.getElementById('password');
        errId.style.border = '1px solid red';
    }else  if(password.length < 5){
        printError("password_err", "Password should not be less than 5 characters.");
        const errId = document.getElementById('place');
        errId.style.border = '1px solid red';
    }else{
        printError("password_err", "");
        password_err = false;
    }
    
    // _______ Preventing the form from being submited if their are any errors
    if((username_err || email_err  || password_err) === true){
        event.preventDefault()
    }else{
        event.currentTarget.submit()
    }
     
}

