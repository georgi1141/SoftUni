const jwt = require("../lib/jwt");
const config = require("../config/config");

exports.auth = async (req, res, next) => {
  const token = req.cookies["auth"];

  if (token) {
    try {
      const user = await jwt.verify(token, config.secret);
       req.user = user
       res.locals.user=user
       res.locals.isAuth = true


      next();
    } catch (error) {
      res.clearCookie("auth");
      res.redirect("/user/login");
    }
  } else {
    next();
  }
};
