import page from './node_modules/page/page.mjs'
import { homeView } from './pages/home-view.js'
import { articlesView } from './pages/articles-view.js'
import { aboutView } from './pages/about-view.js'

page('/home',homeView)
page('/articles',articlesView)
page('/about',aboutView)



page.start()