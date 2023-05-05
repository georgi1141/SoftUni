import {render} from '../../node_modules/lit-html/lit-html.js';
import { getUserData } from '../data/utility.js';
import { navTemplate } from './renderNav.js';

const root = document.querySelector('#container');

export function attatchRender(ctx,next){

    ctx.render = renderView

    next();

}

function renderView(data){
    const userData = getUserData()
    return render(navTemplate(userData,data),root)

}