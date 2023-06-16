const express = require("express");
const dbConnect = require("./config/dbConfig");
const viewEngineConfig = require("./config/viewEngineConfig");
const expressConfig = require("./config/expressConfig");
const routes = require("./routes");

const app = express();

//Configuring express (static files,data parsing)
expressConfig(app);

//Configuring express-handlebars view engine
viewEngineConfig(app);

// Connecting app to database
dbConnect()
  .then(() => console.log("DB connected, successfully!"))
  .catch((err) =>
    console.log(`Error ${err.message} occured, when trying to connect to DB!`)
  );

app.use(routes);

app.listen(3000, () => console.log("Server is listening on port 3000"));
