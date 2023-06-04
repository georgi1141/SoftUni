const router = require("express").Router();
const breedService = require('../services/breedService')
const catService = require('../services/catService')

router.get("/", async (req, res) => {

  const allCats = await catService.getAll()

  res.render("mainPage",{allCats});
});

router.get("/addBreed", (req, res) => {
  res.render("addBreed");
});

router.get("/addCat", async (req, res) => {

  const breeds = await breedService.getAll()

  res.render("addCat",{breeds});
});

module.exports = router;
