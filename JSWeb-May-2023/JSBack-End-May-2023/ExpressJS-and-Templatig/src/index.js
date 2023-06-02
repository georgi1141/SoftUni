const express = require('express');
const port = 3000
const app = express();
const dbConnect = require('./config/dbConfig')
const routes = require('./routes')


const expressConfig = require('./config/express')
expressConfig(app)

const hbsConfig = require('./config/hbsConfig')
hbsConfig(app)


 dbConnect()
 .then(()=>console.log('DB connected'))
 .catch(err=>console.log(`DB error ${err}`))

 app.use(routes)






app.listen(port,()=>console.log(`listening on port ${port}`))