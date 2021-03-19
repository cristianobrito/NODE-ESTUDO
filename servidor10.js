var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get("/", function(req, res){
      var bebidas =
      [{nome: 'Cerveja',      Total: 3 },
       {nome: 'Refrigerante', Total: 5 },
       {nome: 'Suco',         Total: 10 }];

       res.render('/page/index',{
                bebidas : bebidas

    });
});
app.get("/about", function(req, res){
      res.render('/pages/about');
});

app.use(function(req, res, next){
      res.status(404).send("não encontrado")
});

app.listen(3000, function(){
    console.log("Servidor Rodando na url http://localhost:3000");
});
