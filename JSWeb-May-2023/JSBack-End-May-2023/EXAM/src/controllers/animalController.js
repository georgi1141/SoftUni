const router = require("express").Router();
const { create, getOne, edit, del,addDonation } = require("../services/animalService");
const {isAuth} = require('../middlewares/authMiddleware')

router.get("/addAnimal",isAuth, (req, res) => {
  res.render("create");
});

router.post("/addAnimal",isAuth, async (req, res) => {
  const animalData = { ...req.body, owner: req.user._id };

  try {
    await create(animalData);

    res.redirect("/dashboard");
  } catch (error) {
    res.render("create", { error });
  }
});

router.get("/:photoId/details", async (req, res) => {
  const photoId = req.params.photoId;
  const user = req.user

  try {
    const photo = await getOne(photoId);
    const isOwner = req.user?._id == photo.owner._id;
    const hasDonated = photo.donations.map(id=>{
      if(id ==String(user)){
        return true
      }
    })

    res.render("details", { photo, isOwner ,user});
  } catch (error) {
    res.render("details", { error });
  }
});

router.get("/:photoId/edit",isAuth, async (req, res) => {
  const photoId = req.params.photoId;
  

  try {
    const animalData = await getOne(photoId);

    res.render("edit", { animalData });
  } catch (error) {
    res.render(`/:${photoId}/edit`, { error });
  }
});

router.post("/:photoId/edit",isAuth, async (req, res) => {
  const photoId = req.params.photoId;

  const animalData = req.body;

  try {
    await edit(photoId, animalData);

    res.redirect(`/${photoId}/details`);
  } catch (error) {
    res.render(`/:${photoId}/edit`, { error });
  }
});

router.get("/:photoId/delete",isAuth, async (req, res) => {
  const photoId = req.params.photoId;

  try {
    await del(photoId);

    res.redirect("/dashboard");
  } catch (error) {

    res.render(`/:${photoId}/edit`, { error });
  }
});

router.get("/:photoId/donation",isAuth,async (req,res)=>{
  const photoId = req.params.photoId;
  const userId = req.user._id


  try {

    await addDonation(photoId,userId)

    res.redirect(`/${photoId}/details`)


    
  } catch (error) {

    res.render(`/${photoId}/details`, { error });

    
  }

})

module.exports = router;
