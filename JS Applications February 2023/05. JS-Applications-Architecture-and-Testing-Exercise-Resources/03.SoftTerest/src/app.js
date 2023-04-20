import { render } from '../node_modules/lit-html/lit-html.js'
import page from '../node_modules/page/page.mjs'

import { createView } from './views/createView.js'
import { dashboardView } from './views/dashboardView.js'
import { homeView } from './views/homeView.js'
import { loginView } from './views/loginView.js'
import { registerView } from './views/registerView.js'


const root = document.querySelector('#root')


page(decorateContext)

page('/',homeView)
page('/dashboard',dashboardView)
page('/create',createView)
page('/login',loginView)
page('/register',registerView)




//starting page.js
page.start()


//attatching render function to the context as a property
 function decorateContext(ctx,next){
    ctx.render = renderViews
    next()
}

function renderViews(content){
  return  render(content,root)
}