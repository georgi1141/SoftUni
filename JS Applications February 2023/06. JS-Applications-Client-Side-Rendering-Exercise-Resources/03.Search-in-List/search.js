import { towns} from './towns.js'
import { html, render } from "../../../node_modules/lit-html/lit-html.js"




function update (){
   const result = searchTemplate()
}


function search() {
   const match =  document.querySelector('#searchText').value
   console.log(match);
}


