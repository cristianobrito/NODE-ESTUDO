var http = require('http');
var url = require('url');
var server = http.createServer(function(request, response){
    response.writeHead(200, {"Content-Type":"text/html; charset=utf-8"});
    response.write("<h1>Dados Url</h1>");
    var result = url.parse(request.url, true);
    for(var key in result.query){
        response.write("<h2>" + key + " : " + result.query[key] + "</h2>");
    }
    response.end();
});
server.listen(3000, function(){
    console.log("Servidorndo na porta 3000");
});

/*A única novidade é o response.url, este método passa o caminho digitado da página.

Caso tenha alguma dúvida como se roda o node basta ir neste post!

No Node, existe um módulo nativo chamado ‘url’, que é responsável por fazer parser e a formatação de urls.
No código acima, a função url.parse (request.url, true) fez um parser da url obtida
pela requisição do cliente (request.url).

url.parse() consta com o seguintes atributos:

Usando como exemplo a seguinte url

'http://user:pass@host.com:8080/p/a/t/h?query=string#hash'

href: A URL completa que foi originalmente analisado. Tanto o protocolo e host são em minúsculas.

Example: 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash'

protocol: O protocolo do pedido, em minúscula.

Example: 'http:'

slashes: O protocolo requer barras após os dois pontos.

Example: true or false

host:  A parte do host completo em minúsculas do URL, incluindo informações de porta.

Example: 'host.com:8080'

auth: A porção de informações de autenticação de uma URL.

Example: 'user:pass'

hostname: Apenas a parte hostname em minúscula do host.

Example: 'host.com'

port: A porção de número da porta do host.

Example: '8080'

pathname: A seção caminho da URL, que vem depois do host e antes da consulta, incluindo a barra inicial se estiver presente.

Example: '/p/a/t/h'

search: A porção de ‘string de consulta’ da URL, incluindo o ponto de interrogação líder.

Example: '?query=string'

path: A concatenação de caminho e de pesquisa.

Example: '/p/a/t/h?query=string'

query: Retorna uma query string em JSON.

Example: 'query=string' or {'query':'string'}

hash:  A parte “fragmento” da URL, incluindo o sinal de libra.

Example: '#hash'

Sendo assim, vimos que a api ‘url’ permite organizar todas as urls da nossa aplicação, para mais informações consulte a documentação da api aqui.*/
