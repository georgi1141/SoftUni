import page from '../node_modules/page/page.mjs'
import { logout } from './data/auth.js'
import { deleteOffer } from './data/utility.js'
import { decorateCtx } from './middlewares/ctxMiddleware.js'
import { createOfferView } from './views/createOfferView.js'
import { dashboardView } from './views/dashboardView.js'
import { homeView } from './views/homeView.js'
import { loginView } from './views/loginView.js'
import { detailsView } from './views/offerDetailsView.js'
import { registerView } from './views/registerView.js'


page(decorateCtx)

page('/',homeView)
page('/dashboard',dashboardView)
page('/dashboard/:id',detailsView)
page('/dashboard/:id/delete',delOffer)
page('/register',registerView)
page('/login',loginView)
page('/logout',logoutAction)
page('/create-offer',createOfferView)




page.start()


function logoutAction(ctx){
    logout()
    ctx.page.redirect('/')

    
}

async function delOffer(ctx){
    let id = ctx.params.id
   await deleteOffer(id)
   ctx.page.redirect('/dashboard')
}
