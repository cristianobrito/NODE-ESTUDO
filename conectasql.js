const Sequelize = require('sequelize');
const sequelize = new Sequelize('fseletro', 'root', '',    
      host:"localhost",
      dialect:'mysql'
})

sequelize.authenticate().then(function(){
          console.log("conectado com louvor sucesso!");
}).catch(function(erro){
          console.log("falha ao se conectar" + erro);
})

/*new Sequelize('nome-do-banco', 'nome-do-usuario', 'senha', {
      host:"servidor",
      dialect:'parametro-obrigatorio'
})
then()
function(){}
then(function(){}) função dentro de função
*/
