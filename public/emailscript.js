//  Here is a script where we will be collecting data from the form  
    $('form').on('submit', (e) => {
        // e.preventDefault();

        const names = $('#names').val().trim();
        const email = $('#from-email').val().trim();
        const date = $('#date').val().trim();
        const product = $('#product').val().trim();
        const quantity = $('#quantity').val().trim();
        const payment = $('#payment').val().trim();
        const delivery = $('#delivery').val().trim();
        const phoneNumber = $('#phoneNumber').val().trim();
        const directions = $('#directions').val().trim();

        const data = {
            names,
            email,
            date,
            product,
            quantity,
            payment,
            delivery,
            phoneNumber,
            directions
        };

        $.post('/email', data, function() {
            console.log('Server recieved our data');
        });
    });
    // document.getElementById('#form-data').reset();
