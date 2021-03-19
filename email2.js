var mailer = require("nodemailer");
//usando SMTP para envio
var smtpTransport = mailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: "britonano@gmail.com",
        pass: "akilles1"
    }
});

var mail = {
    from: "cristiano <britonano@gmail.com>",
    to: "britonano@outlook.com",
    subject: "Envio de email usando Node.js",
    text: "Olá mundo!",
    html: "<b>Olá mundo!</b>"
}

smtpTransport.sendMail(mail, function(error, response){
    if(error){
        console.log(error);
    }else{
        console.log("Email enviado: " + response.message);
    }

    smtpTransport.close();
});
//site do exemplo: https://imasters.com.br/back-end/as-8-duvidas-tecnicas-mais-comuns-sobre-nodejs
