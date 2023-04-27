import { html } from "../../node_modules/lit-html/lit-html.js";
import { deleteRecipe, getDetails } from "../data/util.js";

const detailsTemplate = (recipe) => html`
  <img class="det-img" src=../${recipe.img} />
  <div class="container home some">
    <div class="desc">
      <h2 class="display-5">${recipe.title}</h2>
      <p class="infoType">Description:</p>
      <p class="idea-description">${recipe.description}</p>
    </div>
    <div class="text-center">
      <a class="btn detb" href="">Delete</a>
    </div>
  </div>
`;
let id = null;
let ctx;

export async function detailsView(ctx) {
  ctx = ctx;
  id = ctx.params.id;

  return ctx.render(detailsTemplate(await displayRecipe(id)));

  async function displayRecipe(id) {
    const data = await getDetails(id);

    return data;
  }
}
