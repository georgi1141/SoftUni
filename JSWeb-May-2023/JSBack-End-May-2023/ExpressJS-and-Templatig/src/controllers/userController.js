const router = require('express').Router()



router.get('/register',(req,res)=>{
    res.render('auth/registerPage')
})

router.get('/login',(req ,res)=>{
    res.render('auth/loginPage')
})





module.exports = router