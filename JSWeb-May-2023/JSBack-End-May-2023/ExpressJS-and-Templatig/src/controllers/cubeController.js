const router = require("express").Router();
const cubeService = require("../services/cubeService");

router.get("/create", (req, res) => {
  res.render("create");
});
router.post("/create", (req, res) => {
  const { name, description, imageUrl, difficultyLevel } = req.body;

  cubeService.createCube({ name, description, imageUrl, difficultyLevel });

  res.redirect("/");
});

router.get('/:cubeID/details', (req, res) =>{
    const id = req.params.cubeID
    const cube = cubeService.getOneCube(id)
    res.render('details',{cube})
  })

module.exports = router;
