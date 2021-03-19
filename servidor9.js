const express = require('express');
const app = express();

app.get("/", function(req, res){
      res.sendFile(__dirname + "/pages2/artigos.html");
});
app.get("/artigos", function(req, res){
      res.sendFile(__dirname + "/pages2/artigos.html");
});
app.get("/contato", function(req, res){
      res.sendFile(__dirname + "/pages2/contato.html");
});
app.get("/erro", function(req, res){
      res.sendFile(__dirname + "/pages2/erro.html");
});
app.use(function(req, res, next){
      res.status(404).send("não encontrado")
});

app.listen(3000, function(){
    console.log("Servidor Rodando na url http://localhost:3000");
});
