function printError(elemId, hintMsg){
    document.getElementById(elemId).innerHTML = hintMsg;
}

function purchase(){
    var names = document.mydata.names.value;
    var email = document.mydata.email.value;
    var date= document.mydata.date.value;
    var product = document.mydata.product.value;
    var quantity = document.mydata.quantity.value;
    var payment = document.mydata.payment.value;
    var delivery = document.mydata.delivery.value;
    var phoneNumber = document.mydata.phoneNumber.value;
    var directions = document.mydata.directions.value;
    
    // ___ Defining error varriables with default value
    var names_err = email_err  = date_err = product_err = quantity_err = payment_err = delivery_err = phoneNumber_err = directions_err = true;

    // _______ validating client name
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
            printError("names_err", "First letter of Name should be In Uppercase i.e Phillip");
            const errId = document.getElementById('names');
            errId.style.border = '1px solid red';
        }else{
            printError("names_err", "");
            names_err = false;
        }
        }
    }

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

    // _______ validating check In
    if(date === ""){
    printError("date_err", "Please enter your Date of Product");
    const errId = document.getElementById('date');
    errId.style.border = '1px solid red';
    }else{
        printError("date_err", "");
        date_err = false;
    }

    // _______ validating Product Name
    if(product === ""){
        printError("product_err", "Please enter your Product Name");
        const errId = document.getElementById('product');
        errId.style.border = '1px solid red';
    }
    else  if(product.length < 5 || product.length > 50){
        printError("names_err", "Product name should be between 5-50 characters");
        const errId = document.getElementById('product');
        errId.style.border = '1px solid red';
    }
    else{
        var regex = /^[a-zA-Z\s]+$/;
        if(regex.test(product) === false){
            printError("product_err", "Product Name should not include numeral characters.");
            const errId = document.getElementById('product');
            errId.style.border = '1px solid red';
        }else{
            var uppercase = /^[A-Z][a-z]*/;
            if(uppercase.test(product) === false){
            printError("product_err", "First letter of product should be In Uppercase i.e Icecream");
            const errId = document.getElementById('product');
            errId.style.border = '1px solid red';
        }else{
            printError("product_err", "");
            product_err = false;
        }
        }
    }
    
    // _______ validating Quantity
    if(quantity === ""){
        printError("quantity_err", "Please enter Quantity");
        const errId = document.getElementById('quantity');
        errId.style.border = '1px solid red';
    }
    else{
        var regex = /^(\$|)([1-9]\d{0,2}(\,\d{3})*|([1-9]\d*))(\.\d{2})?$/;
        if(regex.test(quantity) === false){
            printError("quantity_err", "Quantity should be in numbers")
            const errId = document.getElementById('quantity');
            errId.style.border = '1px solid red';
        }else{
            printError("quantity_err", "");
            quantity_err = false;
        }
    }
   
    // _____ Validating Mode of Payment
    if(payment === "-- Mode Of Payment --"){
        printError("payment_err", "Please Select Mode Of Payment");
        const errId = document.getElementById('payment');
        errId.style.border = '1px solid red';
    }else{
        printError("payment_err", "");
        payment_err = false;
    }

        // _______ validating Mode of Delivery
        if(delivery === "-- Mode Of Delivery --"){
        printError("product_err", "Please Select Mode of Delivery");
        const errId = document.getElementById('delivery');
        errId.style.border = '1px solid red';
    }else{
            printError("delivery_err", "");
            delivery_err = false;
    }



      // _______ validating phone number
      if(phoneNumber === ""){
        printError("phoneNumber_err", "please enter Phone Number");
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

    
    // _______ validating directions
    if(directions === ""){
        printError("directions_err", "Location Can't Be Left Empty");
        const errId = document.getElementById('directions');
        errId.style.border = '1px solid red';
    }
    else{
        var regex = /^[A-Z][a-z]*/;
        if(regex.test(directions) === false){
            printError("directions_err", "First letter Should be In Caps Lock")
            const errId = document.getElementById('directions');
            errId.style.border = '1px solid red';
        }else{
            printError("directions_err", "");
            directions_err = false;
        }
    }
    
    // __Preventing the form from being submited if their are any errors
    if((names_err || email_err  || date_err || product_err || quantity_err || payment_err || delivery_err|| phoneNumber_err || directions_err) === true){
        event.preventDefault()
    }else{
        event.currentTarget.submit()
    }
     
}