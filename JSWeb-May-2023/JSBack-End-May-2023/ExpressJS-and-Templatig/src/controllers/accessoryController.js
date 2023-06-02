const router = require('express').Router()
const accessoryService = require('../services/accessoryService')

router.get('/addAccessory',(req,res)=>{

    res.render('accessories/createAccessory')

})

router.post('/addAccessory',async (req,res)=>{
    const {name,description,imageUrl} = req.body

    await accessoryService.create({name,description,imageUrl})

    res.redirect('/')

})




module.exports = router