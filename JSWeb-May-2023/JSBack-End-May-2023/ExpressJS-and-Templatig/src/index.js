const express = require('express');
const port = 3000
const app = express();
const dbConnect = require('./config/dbConfig')

const homeControler = require('./controllers/homeController')
const cubeController = require('./controllers/cubeController')

const expressConfig = require('./config/express')
expressConfig(app)

const hbsConfig = require('./config/hbsConfig')
hbsConfig(app)


 dbConnect()
 .then(()=>console.log('DB connected'))
 .catch(err=>console.log(`DB error ${err}`))


app.use(homeControler)
app.use('/cubes',cubeController)
app.get('*',(req,res)=>{
    res.render('404')
})




app.listen(port,()=>console.log(`listening on port ${port}`))