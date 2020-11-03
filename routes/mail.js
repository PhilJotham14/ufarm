const nodemailer = require('nodemailer');
         
module.exports.emailSending = async function( buyer, info){
    // Working with nodemailer to send messages
    let mailTransporter = nodemailer.createTransport({ 
        service: 'gmail', 
        auth: { 
            user: 'p.jothamokiror@gmail.com', 
            pass: 'ajeinstein'
        },
        tls: {
            rejectUnauthorized: false
        } 
    }); 
    const mailOptions = {
        from: 'p.jothamokiror@gmail.com',
        to: 'p.jothamokiror@gmail.com',
        subject: buyer,
        text: info
    };

    await mailTransporter.sendMail(mailOptions, (err, data)=>{
        if(err){
            console.log(err.message)
        }
        console.log('Email Successfully Delivered')
    }) 
}
