const express = require('express');
const app = express();

app.get("/", function(req, res){
      res.sendFile(__dirname + "/ch01/final/aliens/report.html");
});
app.get("/", function(req, res){
      res.sendFile(__dirname + "/report.php");
});

app.use(function(req, res, next){
      res.status(404).send("não encontrado")
});

app.listen(3000, function(){
    console.log("Servidor Rodando na url http://localhost:3000");
});
