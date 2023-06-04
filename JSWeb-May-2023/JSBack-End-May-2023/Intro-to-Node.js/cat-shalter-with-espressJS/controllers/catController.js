const router = require('express').Router()
const catService = require('../services/catService')



router.post('/addCat',async (req,res)=>{

    const {name,description,upload,breed} = req.body


    await catService.create({name,description,image:upload,breed})

    res.redirect('/')

})

module.exports = router