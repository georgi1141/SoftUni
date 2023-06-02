const router = require("express").Router();
const cubeService = require("../services/cubeService");

router.get("/create", (req, res) => {
  res.render("create");
});
router.post("/create", async (req, res) => {
  const { name, description, imageUrl, difficultyLevel } = req.body;

  await cubeService.createCube({ name, description, imageUrl, difficultyLevel });

  res.redirect("/");
});

router.get('/:cubeID/details', async(req, res) =>{
    const id = req.params.cubeID
    const cube = await cubeService.getOneCube(id)
    res.render('details',{cube})
  })

module.exports = router;
