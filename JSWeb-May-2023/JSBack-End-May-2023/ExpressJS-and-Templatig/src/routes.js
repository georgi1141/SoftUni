const router = require('express').Router()


const homeControler = require('./controllers/homeController')
const cubeController = require('./controllers/cubeController')
const accessoryController = require('./controllers/accessoryController')

router.use(homeControler)
router.use('/cubes',cubeController)
router.use(accessoryController)
router.get('*',(req,res)=>{
    res.render('404')
})



module.exports = router