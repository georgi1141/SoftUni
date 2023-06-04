const express = require("express");
const dbConfig = require('./config/dbConfig')
const expressConfig = require('./config/expressConfig')
const handlebarsConfig = require('./config/handlebarsConfig')

const app = express();
dbConfig.connectToDB()
expressConfig.attachToExpress(app)
handlebarsConfig.hbsConfig(app)

const homeController = require('./controllers/homeController')
app.use(homeController)





app.listen(5000, () => console.log("listening on port 5000"));
