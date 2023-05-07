import page from '../node_modules/page/page.mjs'
import { clearUserData } from './data/util.js'
import { decorateContext } from './middlewares/attachCtx.js'
import { renderNav } from './middlewares/navMiddleware.js'

import { createView } from './views/createView.js'
import { dashboardView } from './views/dashboardView.js'
import { detailsView } from './views/detailsView.js'
import { homeView } from './views/homeView.js'
import { loginView } from './views/loginView.js'
import { registerView } from './views/registerView.js'




page(decorateContext)
page(renderNav)

page('/',homeView)
page('/dashboard',dashboardView)
page('/dashboard/:id',detailsView)
page('/create',createView)
page('/login',loginView)
page('/register',registerView)
page('/logout',logoutView)


page.start()


function logoutView(ctx){
  clearUserData()
  ctx.page.redirect('/')
  
}

