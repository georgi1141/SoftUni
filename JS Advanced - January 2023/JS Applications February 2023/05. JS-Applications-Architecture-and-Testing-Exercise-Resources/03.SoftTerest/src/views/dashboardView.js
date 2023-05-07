import { html } from "../../node_modules/lit-html/lit-html.js";
import { getRecipes } from "../data/util.js";

const dashboardTemplate = (recipes) => html`   
<div id="dashboard-holder">

    ${recipes
      ? recipes.map(recipe=> html`
        <div class="card overflow-hidden current-card details" style="width: 20rem; height: 18rem;">
          <div class="card-body">
            <p class="card-text">${recipe.title}</p>
          </div>
            <img class="card-image" src=${recipe.img} alt="Card image cap">
            <a  class="btn" href="/dashboard/${recipe._id}">Details</a>
        </div>`)
    :html`<h1>No ideas yet! Be the first one :)</h1>`}
</div>

`

export async function dashboardView(ctx) {
    
  return ctx.render(dashboardTemplate(await displayRecipes()));

  async function displayRecipes() {
    const data =  await getRecipes()
    return data  
  }
}






















