const express = require('express');
const handlebars = require('express-handlebars');
const port = 3000
const app = express();

// setting up handlebars template engine
app.engine('hbs',handlebars.engine({
    extname: 'hbs'
}));
app.set('view engine','hbs')
app.set('views','src/views')


app.get('/', (req,res)=>{


    res.render('index')
});


app.listen(port,()=>console.log(`listening on port ${port}`))