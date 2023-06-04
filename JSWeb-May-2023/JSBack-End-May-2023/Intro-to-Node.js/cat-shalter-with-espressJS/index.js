const express = require("express");
const dbConfig = require('./config/dbConfig')
const expressConfig = require('./config/expressConfig')
const handlebarsConfig = require('./config/handlebarsConfig')

const app = express();
dbConfig.connectToDB()
expressConfig.attachToExpress(app)
handlebarsConfig.hbsConfig(app)

const homeController = require('./controllers/homeController')
const breedController = require('./controllers/breedController')
const catController = require('./controllers/catController')
app.use(homeController)
app.use(breedController)
app.use(catController)





app.listen(5000, () => console.log("listening on port 5000"));
