const express = require("express");
const handlebars = require("express-handlebars");
const fs = require("fs");
const app = express();
const breeds = require("./breed.js");

// setting the view engine
app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
//Middlewares
const bodyParser = express.urlencoded({ extended: false });
app.use(bodyParser);
app.use(express.static("public"));

app.get("/", (req, res) => {
  fs.readFile("./cats.json", "utf8", (err, data) => {
    if (err) throw err;
    res.render("mainPage", { data: JSON.parse(data) });
  });
});
app.get("/addBreed", (req, res) => {
  res.render("addBreed");
});
app.post("/addBreed", (req, res) => {
  const newBreed = req.body.breed;
  breeds.push(newBreed);
  res.redirect("/addCat");
  res.end();
});
app.get("/addCat", (req, res) => {
  res.render("addCat", { breed: breeds });
});

app.listen(5000, () => console.log("listening on port 5000"));
