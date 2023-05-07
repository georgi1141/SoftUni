
import {hideAll, showView} from './rauter.js'


const routes ={
    '/' : 87
    




}

document.querySelector('nav').addEventListener('click',(e)=>{

    if(e.target.tagName == 'A' && e.target.href){
        e.preventDefault()
        hideAll()

        const url = new URL(e.target.href)
        console.log(url.pathname);
    }
})

