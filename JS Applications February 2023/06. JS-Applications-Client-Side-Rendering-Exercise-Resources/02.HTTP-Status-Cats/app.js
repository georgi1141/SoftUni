import { html, render } from "../../../node_modules/lit-html/lit-html.js";
import { cats } from './catSeeder.js'



const catsContainer = document.querySelector('#allCats')
const ulElement = document.createElement('ul')
catsContainer.appendChild(ulElement)



const template = (data)=>html`
${data.map(cat=>html`
            <li>
                <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
                <div class="info">
                    <button class="showBtn" @click=${()=>{toggle()}} >${cat.info ? 'Hide' : 'Show'} status code</button>
                    <div class="status" style="display: none" id="${cat.id}">
                        <h4>Status Code: ${cat.statusCode}</h4>
                        <p>${cat.statusMessage}</p>
                    </div>
                </div>
            </li>



`)}
`
function toggle(event){
   
    // const idElement = event.parentNode
    console.log(event);
    // console.log(idElement)
    // const cat = cats.find(c=>c.id == idElement)
    // cat.info = !cat.info
    // render(template(cats),ulElement)

}
cats.forEach(cat=>{
    cat.info = false
    render(template(cats),ulElement)})



render(template(cats),ulElement)




