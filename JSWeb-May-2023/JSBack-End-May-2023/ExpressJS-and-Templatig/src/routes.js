const router = require('express').Router()


const homeControler = require('./controllers/homeController')
const cubeController = require('./controllers/cubeController')
const accessoryController = require('./controllers/accessoryController')
const userController = require('./controllers/userController')

router.use(homeControler)
router.use('/cubes',cubeController)
router.use(accessoryController)
router.use('/user',userController)
router.get('*',(req,res)=>{
    res.render('404')
})
 


module.exports = router