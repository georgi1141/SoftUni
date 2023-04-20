import page from '../node_modules/page/page.mjs'
import { decorateContext } from './middlewares/attachCtx.js'

import { createView } from './views/createView.js'
import { dashboardView } from './views/dashboardView.js'
import { homeView } from './views/homeView.js'
import { loginView } from './views/loginView.js'
import { registerView } from './views/registerView.js'




page(decorateContext)

page('/',homeView)
page('/dashboard',dashboardView)
page('/create',createView)
page('/login',loginView)
page('/register',registerView)

page.start()


