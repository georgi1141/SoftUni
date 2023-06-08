const router = require("express").Router();
const cubeService = require("../services/cubeService");
const accessoryService = require("../services/accessoryService");

router.get("/create", (req, res) => {
  res.render("create");
});
router.post("/create", async (req, res) => {
  const { name, description, imageUrl, difficultyLevel } = req.body;

  await cubeService.createCube({
    name,
    description,
    imageUrl,
    difficultyLevel,
    owner:req.user._id
  });

  res.redirect("/");
});

router.get("/:cubeID/details", async (req, res) => {
  const id = req.params.cubeID;
  const cube = await cubeService.getOneCube(id);
  res.render("details", { cube});
});

router.get("/:cubeID/attach-accessory", async (req, res) => {
  const id = req.params.cubeID;

  const cube = await cubeService.getOneCube(id);
  const accessoryOptions = await accessoryService.getOthers(cube.accessories).lean();
  const hasAccesories = accessoryOptions.length > 0;

  res.render("accessories/attachAccessory", {
    cube,
    accessoryOptions,
    hasAccesories,
  });
});

router.post("/:cubeID/attach-accessory", async (req, res) => {
  const {accessory} = req.body
  const id = req.params.cubeID;


  await cubeService.attach(id,accessory)

  res.redirect(`/cubes/${id}/details`)
  
  
})

module.exports = router;
