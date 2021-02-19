
const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: "465",
    secure: true,
    
    auth: {
        user: "heitorlmoreira@gmail.com",
        pass: "rbbfgznihcdlgopz",
    }
});
    transporter.sendMail({
        from: "Heitor Lima <heitorlmoreira@gmail.com>",
        to: "viviane-lima-2008@hotmail.com",
        subject: "Você foi Expulso da Escola",
        text:" Olá isso é um teste ",
        html: "<h1>Vc está expulso</h1> <p>Isso é um teste!</p>"
    
    }).then(message =>{
     console.log(message);
    }).catch(err =>{
    console.log(err)
    });


