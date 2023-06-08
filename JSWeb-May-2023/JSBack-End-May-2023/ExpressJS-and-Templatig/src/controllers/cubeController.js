const router = require("express").Router();
const cubeService = require("../services/cubeService");
const accessoryService = require("../services/accessoryService");
const {isAuth} = require('../middlewares/auth')

router.get("/create", isAuth,(req, res) => {
  res.render("create");
});
router.post("/create", isAuth,async (req, res) => {
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
  const isOwner = cube.owner == req.user?._id

  res.render("details", { cube,isOwner});
});

router.get("/:cubeID/attach-accessory",isAuth, async (req, res) => {
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

router.post("/:cubeID/attach-accessory", isAuth,async (req, res) => {
  const {accessory} = req.body
  const id = req.params.cubeID;


  await cubeService.attach(id,accessory)

  res.redirect(`/cubes/${id}/details`)
  
  
})

router.get('/:cubeID/delete',isAuth,async (req,res)=>{
  const id = req.params.cubeID

  const cube = await cubeService.getOneCube(id)

  res.render('cube/delete',{cube})

})

router.post('/:cubeID/delete',isAuth,async (req,res)=>{
  const id = req.params.cubeID
    await cubeService.deleteCube(id)
    res.redirect('/')
})

router.get('/:cubeID/edit',isAuth,async (req,res)=>{
  const id = req.params.cubeID
  const cube = await cubeService.getOneCube(id)

  if(cube.owner.toString() !== req.user?._id){
    return res.redirect('/404')
  }

  res.render('cube/edit',{cube})

})

router.post('/:cubeID/edit',isAuth,async (req,res)=>{
  const id = req.params.cubeID
  const {name,imageUrl,description,difficultyLevel} = req.body

  await cubeService.editCube(id,{name,imageUrl,description,difficultyLevel})
  

  res.redirect(`/cubes/${id}/details`)
})


module.exports = router;
