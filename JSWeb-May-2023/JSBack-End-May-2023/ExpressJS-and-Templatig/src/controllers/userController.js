const router = require('express').Router()
const userService = require('../services/userService')


router.get('/register',(req,res)=>{
    res.render('auth/registerPage')
})
router.post('/register',async (req,res)=>{
    const {username,password,repeatPassword} = req.body

    try {

        await userService.register({username,password,repeatPassword} )


        res.redirect('/user/login')
        
    } catch (error) {
        const firstError = Object.values(error.errors)[0].message
        res.render('auth/registerPage',{firstError})
        
    }


})

router.get('/login',(req ,res)=>{
    res.render('auth/loginPage')
})

router.post('/login',async (req,res)=>{
const {username,password} = req.body

const token = await userService.login(username,password)

res.cookie('auth',token,{httpOnly:true})

res.redirect('/')

})

router.get('/logout',(req,res)=>{

    res.clearCookie('auth')
    res.redirect('/')

})



module.exports = router