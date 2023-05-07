import  page  from './node_modules/page/page.mjs'
import { catalogPage } from './views/catalog.js'



page('/' , ()=>console.log('home view controler'))
page('edit/:id' , ()=>console.log('home view controler'))
page('/create' , catalogPage)
page('/my-furniture' , ()=>console.log('my-furniture view controler'))
page('/login' , ()=>console.log('login view controler'))
page('/register' , ()=>console.log('register view controler'))
page('/details/:id' , ()=>console.log('details view controler'))

page.start()