const Sequelize = require('sequelize');
const sequelize = new Sequelize('blog', '', '', {
      host:"localhost",
      dialect:'mysql'
})
const Postagem = sequelize.define('postagens', {
      titulo:{
              type: Sequelize.STRING
      },
      conteudo:{
              type: Sequelize.TEXT
      }
})
/*Postagem.create({
          titulo:"qualquer titulo da recode",
          conteudo:"estou escrendo em um arquivo com o nome conectasql2.js"
})*/

const Usuario = sequelize.define('usuarios', {
      nome:{
              type: Sequelize.STRING
      },
      sobrenome:{
              type: Sequelize.STRING
      },
      email:{
              type: Sequelize.STRING
      }
})

Usuario.create({
          nome:"Cristiano",
          sobrenome:"Oliveira",
          idade: 38,
          email:"britonano@gmail.com"
})

//Postagem.sync({force: true})
//Usuario.sync({force: true})
