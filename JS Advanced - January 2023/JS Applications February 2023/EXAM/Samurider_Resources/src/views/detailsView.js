import { html } from "../../node_modules/lit-html/lit-html.js";
import { deleteOffer, getById } from "../data/offers.js";
import { getUserData } from "../util.js";

const detailsPageTemplate = (offer, onDelete) => html`
  <section id="details">
    <div id="details-wrapper">
      <img id="details-img" src=${offer.imageUrl} alt="example1" />
      <p id="details-title">${offer.model}</p>
      <div id="info-wrapper">
        <div id="details-description">
          <p class="year">Year: ${offer.year}</p>
          <p class="mileage">Mileage: ${offer.mileage} km.</p>
          <p class="contact">Contact Number: ${offer.contact}</p>
          <p id="motorcycle-description">${offer.about}</p>
        </div>
        ${offer.canEdit
          ? html` <div id="action-buttons">
              <a href="/catalog/${offer._id}/edit" id="edit-btn">Edit</a>
              <a @click=${onDelete} href="javascript:void(0)" id="delete-btn"
                >Delete</a
              >
            </div>`
          : null}
      </div>
    </div>
  </section>
`;

export async function detailsPage(ctx) {
  const id = ctx.params.id;
  const offer = await getById(id);
  const userData = getUserData();

  if (userData && userData._id == offer._ownerId) {
    offer.canEdit = true;
  }

  async function onDelete() {
    const choice = confirm(
      "Are you sure that you want to delete this motorcycle?"
    );

    if (choice) {
      await deleteOffer(id);
      ctx.page.redirect("/catalog");
    }
  }
  ctx.render(detailsPageTemplate(offer, onDelete));
}
