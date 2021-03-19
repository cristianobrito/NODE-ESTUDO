var fs = require('fs');
fs.writeFile('./escrever.txt', 'eu cristiano estou escrevendo voce denovo\n',{enconding:'utf-8',flag: 'a'}, function (err) {
    if (err) throw err;
    console.log('Arquivo salvo!');
});
