const Sequelize  = require('sequelize')

//conexão com o banco de dados mysql
const sequelize = new Sequelize('postapp', 'root', 'Akilles101', {
        host:"localhost",
        dialect:'mysql'
})
module.exports = {
        Sequelize: Sequelize,
        sequelize: sequelize
}
