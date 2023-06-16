const router = require("express").Router();
const homeController = require("./controllers/homeController");
const userController = require("./controllers/userController");

router.use(homeController);
router.use("/user", userController);

router.get("*", (req, res,error) => {
  res.render("404",{error:error.message});
});

module.exports = router;
