const router = require('express').Router()
const cubeService = require('../services/cubeService')


router.get('/create',(req,res)=>{
    res.render('create')
})
router.post('/create',(req,res)=>{

    const {name,description,imageUrl,difficultyLevel} = req.body

    cubeService.createCube({name,description,imageUrl,difficultyLevel})


    res.redirect('/')

});




module.exports = router
