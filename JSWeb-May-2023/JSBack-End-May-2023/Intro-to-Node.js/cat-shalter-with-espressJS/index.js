const express = require("express");
const app = express();
const dbConfig = require('./config/dbConfig')
dbConfig.connectToDB()
const expressConfig = require('./config/expressConfig')
expressConfig.attachToExpress(app)
const handlebarsConfig = require('./config/handlebarsConfig')
handlebarsConfig.hbsConfig(app)






app.listen(5000, () => console.log("listening on port 5000"));
