const jwt = require("../lib/jwt");
const { SECRET } = require("../util/secret");

exports.auth = async (req, res, next) => {
  const token = req.cookies.token;

  if (token) {
    try {
      const verifiedToken = await jwt.verify(token, SECRET);
      res.locals.user = verifiedToken
      res.locals.isAuth = true

      req.user = verifiedToken;

      next();
    } catch (error) {
      res.clearCookie("token");

      res.redirect("/user/login");
    }
  } else next();
};


exports.isAuth =  (req,res,next)=>{

    if(!req.user){
        return res.redirect('/user/login')
    }

    next()

}