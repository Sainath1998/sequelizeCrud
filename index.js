const express = require('express')

const app = express()

app.get('/',(req, res)=>{
    res.send('This is sequelize tutorial')
})


app.listen(3000,()=>{
    console.log('Hello world')
})