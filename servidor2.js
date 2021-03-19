var http = require('http');
var server = http.createServer(function(req, res){
          var categoria = req.url;
          if(categoria == '/front-end'){
              res.end("<html><body><h1>Tecnologias Front-End: TypeScript, Angular, React</h1></body></html>");
          }else if(categoria == '/back-end'){
              res.end("<html><body><h1>Tecnologias Back-End: NodeJS, Phython, PHP, MySQL</h1></body></html>");
          }else if(categoria == '/infraestrutura'){
            res.end("<html><body><h1>Asure Cloud, Linux, MySQL Server</h1></body></html>");
          }else{
            res.end("<html><body><h1>Programador Full Stack</h1></body></html>");
          }
  //  res.end("<h1>Ola Seja Bem Vindo! este servidor esta na porta 3000</h1>");
}).listen(3000);
console.log("O Servidor Esta Funcionando");
