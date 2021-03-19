const express = require("express");
const app = express();

const cors = require('cors')


app.use( cors() )


app.get("/",  (req, res, next) => {

    const mysql = require('mysql')
    const connection = mysql.createConnection({
        host: 'localhost', 
        user: 'root',
        password: '',
        database: 'blog'
    }) ; 

    connection.query("select * from post",  (error, result)  => {
             res.json( {   dados:  result  } ) 
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



