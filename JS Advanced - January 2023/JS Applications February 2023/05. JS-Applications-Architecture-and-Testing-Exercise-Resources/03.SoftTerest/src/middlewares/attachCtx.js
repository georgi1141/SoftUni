import { render } from '../../../node_modules/lit-html/lit-html.js'


const root = document.querySelector('#root')

//attatching render function to the context as a property
export function decorateContext(ctx,next){
    ctx.render = renderViews
    next()
}

function renderViews(content){
  return  render(content,root)
}