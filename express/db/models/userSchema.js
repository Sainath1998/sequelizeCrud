const Sequelize = require('sequelize')
const connection = require('../connection')

const User = connection.define('user',{
    user_id:{
        type:Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    username:{
        type:Sequelize.DataTypes.STRING,
        allowNull:false
    },
    password:{
        type:Sequelize.DataTypes.STRING,
        allowNull:false
   },
    age:{
        type:Sequelize.DataTypes.INTEGER,
        defaultValue:21
    }
})


User.sync({alter:true}).then((data)=>{
    console.log('Table and model are synced')
}).catch((error)=>{
    console.log('Error syncing in the tabke and the model')
})

module.exports = User