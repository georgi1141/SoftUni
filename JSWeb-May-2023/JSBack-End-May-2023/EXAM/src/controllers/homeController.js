const router = require("express").Router();
const { getAll ,getLastThree} = require("../services/animalService");

router.get("/", async (req, res) => {   

  try {

    const animals = await getLastThree().lean()


    res.render("home",{animals})
    
  } catch (error) {

    res.render('/',{error})
    
  }
;
});

router.get("/dashboard", async (req, res) => {
  try {
    const animals = await getAll();

    res.render("dashboard", { animals });
  } catch (error) {
    res.render("dashboard", { error });
  }
});

router.get("/search", (req, res) => {
  res.render("search");
});

module.exports = router;
