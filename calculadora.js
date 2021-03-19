const somar       = require('./soma')
const diminuir    = require('./subtracao')
const dividir     = require('./divisao')
const multiplicar = require('./multiplicacao')
console.log(somar(10, 5))
console.log(diminuir(10, 5))
console.log(dividir(10, 5))
console.log(multiplicar(10, 5))

//  ./ é a raiz
//require() é a função
//soma é o nome do arquivo externo ou seja importo e exporto pelo nome do arquivo
//o que exporto é o nome da função calculadora.js
//o que importo é o nome dos arquivos soma.js, subtracao.js, multiplicacao.js, divisao.js
//('./soma.js') pode ser assim pra não confundir pois importamos pelo nome de arquivo
//(./subtracao.js), (./divisao.js) etc é o caminho e o nome
