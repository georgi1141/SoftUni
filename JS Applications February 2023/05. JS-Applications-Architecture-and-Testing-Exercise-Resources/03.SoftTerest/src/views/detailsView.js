import { html } from "../../node_modules/lit-html/lit-html.js";
import { deleteRecipe, getDetails, getUserData } from "../data/util.js";

const detailsTemplate = (recipe,onDelete) => html`
  <img class="det-img" src=../${recipe.img} />
  <div class="container home some">
    <div class="desc">
      <h2 class="display-5">${recipe.title}</h2>
      <p class="infoType">Description:</p>
      <p class="idea-description">${recipe.description}</p>
    </div>
    <div class="text-center">
      ${recipe.canEdit ? html`<a @click=${onDelete} class="btn detb" href="javascript:void(0)">Delete</a>`:null}
    </div>
  </div>
`



export async function detailsView(ctx) {
  const id = ctx.params.id;

  const data = await getDetails(id);

  const userData = getUserData()
  if (userData) {
    data.canEdit = userData._id == data._ownerId;
  }

  return ctx.render(detailsTemplate(data,onDelete));

  async function onDelete() {
    const choice = confirm("Are you sure you want to delete this recipe?");

    if (choice) {
      await deleteRecipe(id)
      ctx.page.redirect('/dashboard');

    }

    

  }


}

