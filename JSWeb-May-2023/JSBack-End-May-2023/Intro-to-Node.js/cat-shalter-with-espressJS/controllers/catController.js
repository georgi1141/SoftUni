const router = require("express").Router();
const catService = require("../services/catService");

router.post("/addCat", async (req, res) => {
  const { name, description, upload, breed } = req.body;

  await catService.create({ name, description, image: upload, breed });

  res.redirect("/");
});

router.get('/:catID/deleteCat',async (req,res)=>{

    const id = req.params.catID
    
    await catService.deteleCat(id)
    res.redirect('/')

})

router.get('/:catID/editCat',async (req,res)=>{

  const id = req.params.catID

  const data = await catService.getOne(id)


    res.render('editCat',{data})

})

module.exports = router;
