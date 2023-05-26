const express = require('express');
const port = 3000
const app = express();

const expressConfig = require('./config/express')
expressConfig(app)

const hbsConfig = require('./config/hbsConfig')
hbsConfig(app)






app.get('/', (req,res)=>{


    res.render('index')
});


app.listen(port,()=>console.log(`listening on port ${port}`))