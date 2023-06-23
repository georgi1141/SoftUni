const router = require("express").Router();
const { login, register } = require("../services/userService");

router.get("/login", (req, res) => {
  res.render("user/login");
});

router.post("/login", async (req, res) => {
  const userData = req.body;

  try {
    const token = await login(userData);

    res.cookie("token", token);

    res.redirect("/");
  } catch (error) {
    res.render("user/login", { error: error.message,username:userData.username});
  }
});

router.get("/register", (req, res) => {
  res.render("user/register");
});

router.post("/register", async (req, res) => {
  const userData = req.body;

  try {
   const token =  await register(userData);

   res.cookie('token',token)


    res.redirect("/");
  } catch (error) {
    res.render("user/register", { error: error.message,username:userData.username,email:userData.email });
  }
});

router.get("/logout", async (req, res) => {
  res.clearCookie("token");

  res.redirect("/");
});




module.exports = router;
