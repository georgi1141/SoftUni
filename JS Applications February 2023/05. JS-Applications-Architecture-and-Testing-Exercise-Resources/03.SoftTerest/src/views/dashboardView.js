import { html } from "../../node_modules/lit-html/lit-html.js";
import { getRecipes } from "../data/util.js";

const dashboardTemplate = (recipes) => html`   
<div id="dashboard-holder">
    ${recipes? recipes.map(recipe=> html`<div class="card overflow-hidden current-card details" style="width: 20rem; height: 18rem;">
        <div class="card-body">
        <p class="card-text">${recipe.title}</p>
        </div>
        <img class="card-image" src="${recipe.img}" alt="Card image cap">
        <a class="btn" href="">Details</a>
    </div>`):html`<h1>No ideas yet! Be the first one :)</h1>`}
   
</div>

`

export async function dashboardView(ctx) {
    
  return ctx.render(dashboardTemplate(await displayRecipes()));

  async function displayRecipes() {
    const data =  await getRecipes()
    return data  
  }
}



// details ==========> TODO


// <div class="container home some">
// <img class="det-img" src="./images/dinner.jpg" />
// <div class="desc">
//     <h2 class="display-5">Dinner Recipe</h2>
//     <p class="infoType">Description:</p>
//     <p class="idea-description">There are few things as comforting as heaping bowl of pasta at the end of a long
//         day. With so many easy pasta recipes out there, there's something for every palate to love. That's why
//         pasta
//         makes such a quick, easy dinner for your family—it's likely to satisfy everyone's cravings, due to its
//         versatility.</p>
// </div>
// <div class="text-center">
//     <a class="btn detb" href="">Delete</a>
// </div>
// </div>

























