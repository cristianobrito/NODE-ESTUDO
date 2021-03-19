const express = require("express");
const app     = express();

app.get("/", function(req, res){
      res.send("Seja Bem Vindo ao meu app!");
});
app.get("/sobre", function(req, res){
      res.send("Seja Bem Vindo a pagina sobre!");
})
app.get("/blog", function(req, res){
      res.send("Seja Bem Vindo a meu blog!");
})
app.get("/ola/:cargo/:nome/:cor", function(req, res){
      res.send("<h1> Ola "+req.params.nome+"</h1>"+"<h2>Seu cargo e: "+req.params.cargo+"</h2>"+"<h2>Sua cor preferida e: "+req.params.cor+"</h2>");
})

app.listen(8081, function(){
    console.log("Servidor Rodando na url http://localhost:8081");
});
