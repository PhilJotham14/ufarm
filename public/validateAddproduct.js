function printError(elemId, hintMsg){
    document.getElementById(elemId).innerHTML = hintMsg;
}

function addProduct(){
    var names = document.mydata.names.value;
    var ward = document.mydata.ward.value;
    var date= document.mydata.date.value;
    var price = document.mydata.price.value;
    var quantity = document.mydata.quantity.value;
    var product = document.mydata.product.value;
    var payment = document.mydata.payment.value;
    var uploadimage = document.mydata.uploadimage.value;
    var delivery = document.mydata.delivery.value;
    var directions = document.mydata.directions.value;
    var description = document.mydata.description.value;
    
    // ___ Defining error varriables with default value
    var names_err = ward_err  = date_err = price_err = quantity_err = product_err = payment_err = uploadimage_err = delivery_err = directions_err = description_err = true;

    // _______ validating Product Name
    if(names === ""){
        printError("names_err", "Please enter your Name");
        const errId = document.getElementById('names');
        errId.style.border = '1px solid red';
    }
    else  if(names.length < 5 || names.length > 50){
        printError("names_err", "Product name should be between 5-50 characters");
        const errId = document.getElementById('names');
        errId.style.border = '1px solid red';
    }
    else{
        var regex = /^[a-zA-Z\s]+$/;
        if(regex.test(names) === false){
            printError("names_err", "Product Name should not include numeral characters.");
            const errId = document.getElementById('names');
            errId.style.border = '1px solid red';
        }else{
            var uppercase = /^[A-Z][a-z]*/;
            if(uppercase.test(names) === false){
            printError("names_err", "First letter of product should be In Uppercase i.e Icecream");
            const errId = document.getElementById('names');
            errId.style.border = '1px solid red';
        }else{
            printError("names_err", "");
            names_err = false;
        }
        }
    }
   
    // __________ Validating Ward
    if(ward === "-- Ward of Product --"){
        printError("ward_err", "Please Enter Ward");
        const errId = document.getElementById('ward');
        errId.style.border = '1px solid red';
    }else{
            printError("ward_err", "");
            ward_err = false;
    }

     // _______ validating date
     if(date === ""){
        printError("date_err", "Please enter your Date of Product");
        const errId = document.getElementById('date');
        errId.style.border = '1px solid red';
    }else{
        printError("date_err", "");
        date_err = false;
    }

     // _______ validating price
     if(price === ""){
        printError("price_err", "Please Enter Price");
        const errId = document.getElementById('price');
        errId.style.border = '1px solid red';
    }
    else{
        var regex = /^(\$|)([1-9]\d{0,2}(\,\d{3})*|([1-9]\d*))(\.\d{2})?$/;
        if(regex.test(price) === false){
            printError("price_err", "Please enter a valid price")
            const errId = document.getElementById('price');
            errId.style.border = '1px solid red';
        }else{
            printError("price_err", "");
            price_err = false;
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
     // _______ validating Product
     if(product === "-- Product Type --"){
        printError("product_err", "Please Enter Product Type");
        const errId = document.getElementById('product');
        errId.style.border = '1px solid red';
    }else{
            printError("product_err", "");
            product_err = false;
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
       
     // _______ validating upload image
     if(uploadimage === ""){
        printError("uploadimage_err", "Upload an Image File");
        const errId = document.getElementById('uploadimage');
        errId.style.border = '1px solid red';
    }else{
        printError("uploadimage_err", "");
        uploadimage_err = false;
    } 

    // _____ Validating Mode of Payment
    if(delivery === "-- Mode Of Delivery --"){
        printError("delivery_err", "Please Select Mode Of Payment");
        const errId = document.getElementById('delivery');
        errId.style.border = '1px solid red';
    }else{
        printError("delivery_err", "");
        delivery_err = false;
    }

    
    // _______ validating directions
    if(directions === ""){
        printError("directions_err", "Directions Can't Be Left Empty");
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

    
    // _______ validating description
    if(description === ""){
        printError("description_err", "Please enter Description");
        const errId = document.getElementById('description');
        errId.style.border = '1px solid red';
    }
    else{
        var regex = /^[A-Z][a-z]*/;
        if(regex.test(description) === false){
            printError("description_err", "First letter Should Be In Caps Lock")
            const errId = document.getElementById('description');
            errId.style.border = '1px solid red';
        }else{
            printError("description_err", "");
            description_err = false;
        }
    }
    
    // __Preventing the form from being submited if their are any errors
    if((names_err || ward_err  || date_err || price_err || quantity_err || product_err || payment_err || uploadimage_err || delivery_err || directions_err || description_err) === true){
        event.preventDefault()
    }else{
        event.currentTarget.submit()
    }
     
}