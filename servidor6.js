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

app.get("/blog2", function(req, res){
      var frutas ={
            "banana":"nanica",
            "preço":10.90,
            "maça":"pera",
            "preço2":20.90
      }
      res.json("promoçao " + frutas.preço2 + ", " + frutas.maça);
})

app.listen(8081, function(){
    console.log("Servidor Rodando na url http://localhost:8081");
});
