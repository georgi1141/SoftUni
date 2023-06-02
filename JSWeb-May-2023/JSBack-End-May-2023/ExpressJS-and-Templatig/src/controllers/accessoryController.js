const router = require('express').Router()

router.get('/addAccessory',(req,res)=>{

    res.render('accessories/createAccessory')

})




module.exports = router