import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAllOffers } from "../data/offers.js";

const catalogPageTemplate = (offers) => html`
  <h2>Available Motorcycles</h2>

  ${offers.length > 0
    ? offers.map(
        (offer) => html`
          <section id="dashboard">
            <div class="motorcycle">
              <img src=${offer.imageUrl} alt="example1" />
              <h3 class="model">${offer.model}</h3>
              <p class="year">Year: ${offer.year}</p>
              <p class="mileage">Mileage: ${offer.mileage} km.</p>
              <p class="contact">Contact Number: ${offer.contact}</p>
              <a class="details-btn" href="/catalog/${offer._id}">More Info</a>
            </div>
          </section>
        `
      )
    : html`<h2 class="no-avaliable">No avaliable motorcycles yet.</h2>`}
`;

export async function catalogPage(ctx) {
  const offers = await getAllOffers();

  ctx.render(catalogPageTemplate(offers));
}
