const express = require("express");
const handlebars = require("express-handlebars");
const fs = require("fs");
const breeds = require("./breed.js");
const app = express();

// setting the view engine
app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
//Middlewares
const bodyParser = express.urlencoded({ extended: false });
app.use(bodyParser);
app.use(express.static("public"));

// App views
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
app.post("/addCat", (req, res) => {
  const id = Math.floor(Math.random() * 1000000) + 1;
  const name = req.body.name;
  const description = req.body.description;
  const image = req.body.image;
  const breed = req.body.breed;

  const data = { id, name, description, image, breed };

  fs.readFile("./cats.json", "utf8", (err, cats) => {
    if (err) throw err;
    cats = JSON.parse(cats);
    cats.push(data);
    fs.writeFile("./cats.json", JSON.stringify(cats), (err, data) => {
      if (err) throw err;
      res.redirect("/");
      res.end();
    });
  });
});
app.get("/deleteCat/:id", (req, res) => {
  const id = Number(req.params.id);

  fs.readFile("./cats.json", "utf8", (err, cats) => {
    if (err) throw err;
    const data = JSON.parse(cats);
    let result = [];
    data.forEach((cat) => {
      if (cat.id !== id) result.push(cat);
    });
    fs.writeFile("./cats.json", JSON.stringify(result), (err) => {
      if (err) throw err;
    });
  });
  res.redirect("/");
  res.end();
});
app.get("/editCat/:id", (req, res) => {

    res.render('editCat')

//   const id = Number(req.params.id);

//   const name = req.body.name;
//   const description = req.body.description;
//   const breed = req.body.breed;

//   fs.readFile("./cats.json", "utf8", (err, data) => {
//     if (err) throw err;

//     data.forEach((cat) => {
//       if (cat.id !== id) {
//         cat.id = id;
//         cat.description = description;
//         cat.breed = breed;
//         cat.name = name;
//       }
//     });
//   });
});

app.listen(5000, () => console.log("listening on port 5000"));
