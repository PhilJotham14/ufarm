function printError(elemId, hintMsg){
    document.getElementById(elemId).innerHTML = hintMsg;
}

function contactUs(){
    var email = document.mydata.email.value;
    var subject= document.mydata.subject.value;
    var message = document.mydata.message.value;
    
    // ___ Defining error varriables with default value
    var email_err = subject_err = message_err = true;

    // _______ validating client name

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

    // _______ validating Product Name
    if(subject === ""){
        printError("subject_err", "Please Enter Subject");
        const errId = document.getElementById('subject');
        errId.style.border = '1px solid red';
    }
    else  if(subject.length < 5 || subject.length > 50){
        printError("subject_err", "Subject should be between 5-50 characters");
        const errId = document.getElementById('subject');
        errId.style.border = '1px solid red';
    }
    else{
        var uppercase = /^[A-Z][a-z]*/;
        if(uppercase.test(subject) === false){
            printError("subject_err", "First letter Should be In CapsLock e.g This is..");
            const errId = document.getElementById('subject');
            errId.style.border = '1px solid red';
        }else{
            printError("subject_err", "");
            subject_err = false;
        }
    }
    
    // _______ validating check In
    if(message === ""){
        printError("message_err", "Please Enter Your Message");
        const errId = document.getElementById('message');
        errId.style.border = '1px solid red';
        }    else{
            var uppercase = /^[A-Z][a-z]*/;
            if(uppercase.test(message) === false){
                printError("message_err", "First letter Should be In CapsLock e.g This is..");
                const errId = document.getElementById('message');
                errId.style.border = '1px solid red';
            }else{
            printError("message_err", "");
            message_err = false;
        }
    }

    // __Preventing the form from being submited if their are any errors
    if((email_err  || subject_err || message_err) === true){
        event.preventDefault()
    }else{
        event.currentTarget.submit()
    }
     
}
