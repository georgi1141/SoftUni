const express = require('express');
const port = 3000
const app = express();
const homeControler = require('./controllers/homeController')

const expressConfig = require('./config/express')
expressConfig(app)

const hbsConfig = require('./config/hbsConfig')
hbsConfig(app)

app.use(homeControler)




app.listen(port,()=>console.log(`listening on port ${port}`))