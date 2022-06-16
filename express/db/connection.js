const Sequelize = require('sequelize')
const connection = new Sequelize('usersdb','root','Sainath@123',{
    dialect:'mysql'
})

connection.authenticate().then(()=>{
    console.log('Connection successful')
}).catch((err)=>{
    console.log(err)
})

module.exports = connection

