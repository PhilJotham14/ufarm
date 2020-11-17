function printError(elemId, hintMsg){
    document.getElementById(elemId).innerHTML = hintMsg;
}

function urbanRegistration(){
    var names = document.mydata.names.value;
    var ward = document.mydata.ward.value;
    var dateBirth= document.mydata.dateBirth.value;
    var farmerOneNumber = document.mydata.farmerOneNumber.value;
    var phoneNumber = document.mydata.phoneNumber.value;
    var nin = document.mydata.nin.value;
    var gender = document.mydata.gender.value;
    var dateRegisteration = document.mydata.dateRegisteration.value;

    // ___ Defining error varriables with default value
    var names_err = ward_err  = dateBirth_err = farmerOneNumber_err = phoneNumber_err = nin_err = gender_err = dateRegisteration_err = true;

    // _______ validating first name
    if(names === ""){
        printError("names_err", "Please enter your Name");
        const errId = document.getElementById('names');
        errId.style.border = '1px solid red';
    }
    else  if(names.length < 5 || names.length > 50){
        printError("names_err", "Names should be between 5-50 characters");
        const errId = document.getElementById('names');
        errId.style.border = '1px solid red';
    }
    else{
        var regex = /^[a-zA-Z\s]+$/;
        if(regex.test(names) === false){
            printError("names_err", "Names should not include numeral characters.");
            const errId = document.getElementById('names');
            errId.style.border = '1px solid red';
        }else{
            var uppercase = /^[A-Z][a-z]* [A-Z][a-z]*/;
            if(uppercase.test(names) === false){
            printError("names_err", "First letter of Name should be In Uppercase i.e Phil");
            const errId = document.getElementById('names');
            errId.style.border = '1px solid red';
        }else{
            printError("names_err", "");
            names_err = false;
        }
        }
    }
   
    // __________ Validating last name
    if(ward === "-- Ward Name --"){
        printError("ward_err", "Please Enter Ward");
        const errId = document.getElementById('ward');
        errId.style.border = '1px solid red';
    }else{
            printError("ward_err", "");
            ward_err = false;
    }

     // _______ validating bd
     if(dateBirth === ""){
        printError("dateBirth_err", "Please enter your Date of Birth");
        const errId = document.getElementById('dateBirth');
        errId.style.border = '1px solid red';
    }else{
        printError("dateBirth_err", "");
        dateBirth_err = false;
    }

     // _______ validating place
     if(farmerOneNumber === ""){
        printError("farmerOneNumber_err", "Please enter Farmer One Number");
        const errId = document.getElementById('farmerOneNumber');
        errId.style.border = '1px solid red';
    }
    else  if(farmerOneNumber.length > 20){
        printError("farmerOneNumber_err", "too long");
        // const errId = document.getElementById('place');
        // errId.style.border = '1px solid red';
    }
    else{
        var regex = /^(\$|)([1-9]\d{0,2}(\,\d{3})*|([1-9]\d*))(\.\d{2})?$/;
        if(regex.test(farmerOneNumber) === false){
            printError("farmerOneNumber_err", "Unique ID should be in numbers")
            const errId = document.getElementById('farmerOneNumber');
            errId.style.border = '1px solid red';
        }else{
            printError("farmerOneNumber_err", "");
            farmerOneNumber_err = false;
        }
    }

    // _______ validating occupation
    if(phoneNumber === ""){
        printError("phoneNumber_err", "Please enter Phone Number");
        const errId = document.getElementById('phoneNumber');
        errId.style.border = '1px solid red';
    }
    else  if(phoneNumber.length < 1 || phoneNumber.length > 10){
        printError("phoneNumber_err", "Phone should be 1-10 characters");
        // const errId = document.getElementById('occupation');
        // errId.style.border = '1px solid red';
    }
    else{
        var regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if(regex.test(phoneNumber) === false){
            printError("phoneNumber_err", "Tel Phone Number should only be Integers")
            const errId = document.getElementById('phoneNumber');
            errId.style.border = '1px solid red';
        }else{
            printError("phoneNumber_err", "");
            phoneNumber_err = false;
        }
    }
     // _______ validating NIN
     if(nin === ""){
        printError("nin_err", "Please enter NIN Number");
        const errId = document.getElementById('nin');
        errId.style.border = '1px solid red';
    }
    else  if(nin.length < 13 || nin.length > 14){
        printError("nin_err", "NIN Length should be 14 characters only");
        // const errId = document.getElementById('nin');
        // errId.style.border = '1px solid red';
    }
    else{
        var regex = /^[A-Z]{3}[0-9]{1,8}[A-Z]*$/;
        if(regex.test(nin) === false){
            printError("nin_err", "Please enter a valid NIN(ABC123456DEFG)")
            const errId = document.getElementById('nin');
        errId.style.border = '1px solid red';
        }else{
            printError("nin_err", "");
            nin_err = false;
        }
    }

    // _____ Validating Residence
    if(gender === "-- Gender --"){
        printError("gender_err", "Please select your Gender");
        const errId = document.getElementById('gender');
        errId.style.border = '1px solid red';
    }else{
        printError("gender_err", "");
        gender_err = false;
    }
       
     // _______ validating first name
     if(dateRegisteration === ""){
        printError("dateRegisteration_err", "Please Enter Date of Registeration");
        const errId = document.getElementById('dateRegisteration');
        errId.style.border = '1px solid red';
    }else{
        printError("dateRegisteration_err", "");
        dateRegisteration_err = false;
    } 
    
    // _______ Preventing the form from being submited if their are any errors
    if((names_err || ward_err  || dateBirth_err || farmerOneNumber_err || phoneNumber_err || nin_err || gender_err || dateRegisteration_err) === true){
        event.preventDefault()
    }else{
        event.currentTarget.submit()
    }
     
}