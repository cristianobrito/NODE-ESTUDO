const express = require("express");
const app = express();
    const bodyParser = require('body-parser')

// config ejs
app.set("view engine", "ejs");
// config body-parser
  app.use(bodyParser.urlencoded({ extended: true}))

app.get("/",   (req, res, next) => {

    const mysql = require('mysql')
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'blog'
    }) ;

    connection.query("select * from post",  (error, result)  => {
             res.render('secao/index', {dados: result})
    })
});

app.get('/adicionar/postagem', (req, res) => {
    res.render('admin/adicionar_noticia')
})

app.post('/noticia/salvar', (req, res) => {

    const post = req.body

    const mysql = require('mysql')
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'blog'
    }) ;

    connection.query('INSERT INTO post SET ?', post, () => {
          res.redirect('/')
    })

})

app.listen(1910, () => {
  console.log("O servidor subiu na porta 1910");
});
