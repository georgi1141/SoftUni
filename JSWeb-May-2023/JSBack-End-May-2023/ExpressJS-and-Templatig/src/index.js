const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');
const port = 3000
const app = express();

// express config
app.use(express.static(path.resolve(__dirname,'static')))

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