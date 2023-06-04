const router = require("express").Router();
const breedService = require('../services/breedService')

router.get("/", (req, res) => {
  res.render("mainPage");
});

router.get("/addBreed", (req, res) => {
  res.render("addBreed");
});

router.get("/addCat", async (req, res) => {

  const breeds = await breedService.getAll()
  
  res.render("addCat",{breeds});
});

module.exports = router;
