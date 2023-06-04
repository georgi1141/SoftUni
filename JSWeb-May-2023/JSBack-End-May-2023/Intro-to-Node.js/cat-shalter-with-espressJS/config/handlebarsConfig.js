const handlebars = require('express-handlebars') 

exports.hbsConfig = (app)=>{
app.engine('handlebars',handlebars.engine())
app.set('view engine','handlebars')
app.set('views','')
}