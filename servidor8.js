const express = require('express');
const app = express();

app.get("/index", function(req, res){
      res.sendFile(__dirname + "/pages/index.html");
});
app.get("/sobre", function(req, res){
      res.sendFile(__dirname + "/pages/sobre.html");
});

app.listen(8081, function(){
    console.log("Servidor Rodando na url http://localhost:8081");
});
