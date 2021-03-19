var http = require('http');
var fs   = require('fs');
var server = http.createServer(function(request, response){
          var categoria = request.url;
          if(categoria == '/artigos'){
              fs.readFile(__dirname + '/artigos.html', function(err, html){
                response.end(html);
                if(err)console.log(err);
              });
    }else if(categoria == '/contato'){
        fs.readFile(__dirname + '/contato.html', function(err, html){
          response.end(html);
          if(err)console.log(err);
        });
    }
  //  res.end("<h1>Ola Seja Bem Vindo! este servidor esta na porta 3001</h1>");
});
server.listen(3334, function(){
        console.log('Executando Site Pessoal');
});
