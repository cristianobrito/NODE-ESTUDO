//https://sequelize.org/master/manual/getting-started.html
const express = require("express");
const app = express();
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
//const Sequelize  = require('sequelize')
const Post = require('./models/Post')
//config
      //Template Engine
      app.engine('handlebars', handlebars({defaultLayout: 'main'}))
      app.set('view engine', 'handlebars')
      //body parser
      app.use(bodyParser.urlencoded({extended:false}))
      app.use(bodyParser.json())
/*      //conexão com o banco de dados mysql
      const sequelize = new Sequelize('blog', 'root', 'Akilles101',{
              host:"localhost",
              dialect:'mysql'
      })*/
      //rotas
      app.get('/', function(req, res){
          Post.findAll({order:[['id', 'DESC']]}).then(function(posts){
              res.render('home', {posts: posts})
            })
      })
      app.get('/cad', function(req, res){
              res.render('formulario')
      })

      app.post('/add', function(req, res){
            Post.create({
                  titulo: req.body.titulo,
                  conteudo: req.body.conteudo
            }).then(function(){
                res.redirect('/')
              //res.send("Post criado com sucesso!")
            }).catch(function(erro){
              res.send("Houve um erro "+ erro)
            })
      })

      app.get('/deletar/:id', function(req, res){
          Post.destroy({where: {'id': req.params.id}}).then(function(){
            res.send("Postagem deletada")
          }).catch(function(erro){
            res.send("Esta postagem não existe")
        })
      })
      app.listen(8081, function(){
              console.log("servidor rodando na url http://localhost:8081");
      });
