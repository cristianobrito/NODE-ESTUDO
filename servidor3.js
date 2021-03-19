var http = require('http');
var fs   = require('fs');
var server = http.createServer(function(request, response){
          var categoria = request.url;
          if(categoria == '/index'){
              fs.readFile(__dirname + '/index.html', function(err, html){
                response.end(html);
              });
    }else if(categoria == '/teste'){
        fs.readFile(__dirname + '/teste.html', function(err, html){
          response.end(html);
        });
    }
  //  res.end("<h1>Ola Seja Bem Vindo! este servidor esta na porta 3001</h1>");
});
server.listen(3001, function(){
        console.log('Executando Site Pessoal');
});

/*Painéis
Você pode dividir qualquer painel do editor horizontal ou verticalmente
usando Ctrl+K Up/Down/Left/Rightonde a tecla de direção é a direção para dividir o painel.
Depois de ter um painel dividido, você pode alternar entre eles com Ctrl+K Ctrl+Up/Down/Left/Righta
direção em que o foco deve se mover.*/
