import page from 'page/page.mjs'
import { attatchRender } from './middlewares/attachRenderToCtx.js'
import {addBookView } from './views/addBook.js'
import { dashView } from './views/dashView.js'
import { detailsView } from './views/detailsView.js'
import { editView } from './views/editView.js'
import { loginPage } from './views/loginView.js'
import { myBooksView } from './views/myBooksView.js'
import { registerView } from './views/registerView.js'


page(attatchRender)

page('/',dashView)
page('/login', loginPage)
page('/register', registerView)
page('/:id/details',detailsView)
page('/:id/details/edit',editView)
page('/myBooks',myBooksView)

page('/addBook',addBookView)

page.start()



    
