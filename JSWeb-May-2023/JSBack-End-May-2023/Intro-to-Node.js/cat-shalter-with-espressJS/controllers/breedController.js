const router = require('express').Router()
const breedService = require('../services/breedService')



router.post('/addBreed',async (req,res)=>{
    const {breed} = req.body


   await breedService.create({name:breed})

   res.redirect('/addCat')



})

module.exports = router