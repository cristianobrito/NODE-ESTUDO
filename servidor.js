//carrega o modulo HTTP do node
var http = require('http');

//cria um servidor HTTP e uma escuta de requisições para a porta 8081
http.createServer(function(req, res){

  //manda o corpo da resposta dentro do <h1> Ola Seja Bem Vindo ao NODEMON! este servidor esta na porta 8081
    res.end("<h1>Ola Seja Bem Vindo ao NODEMON! este servidor esta na porta 8081</h1>");
}).listen(8081);

//imprime no console o servidor esta funcionando
console.log("O Servidor Esta Funcionando");
