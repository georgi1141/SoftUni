import { html } from "../../node_modules/lit-html/lit-html.js";
import {  getById, updateOffer } from "../data/offers.js";

const editMotorcyclePageTemplate = (offer,onEdit) => html`

<section id="edit">
            <h2>Edit Motorcycle</h2>
            <div class="form">
              <h2>Edit Motorcycle</h2>
              <form @submit=${onEdit} class="edit-form">
                <input
                  type="text"
                  .value=${offer.model}
                  name="model"
                  id="model"
                  placeholder="Model"
                />
                <input
                  type="text"
                  name="imageUrl"
                  .value=${offer.imageUrl}

                  id="moto-image"
                  placeholder="Moto Image"
                />
                <input
                type="number"
                .value=${offer.year}
                name="year"
                id="year"
                placeholder="Year"
              />
              <input
              type="number"
              .value=${offer.mileage}

              name="mileage"
              id="mileage"
              placeholder="mileage"
            />
            <input
              type="number"
              .value=${offer.contact}

              name="contact"
              id="contact"
              placeholder="contact"
            />
              <textarea
                id="about"
              .value=${offer.about}

                name="about"
                placeholder="about"
                rows="10"
                cols="50"
              ></textarea>
                <button type="submit">Edit Motorcycle</button>
              </form>
          </div>
        </section>


`;

export async function editMotorcyclePage(ctx) {
    const id = ctx.params.id

    const offer = await getById(id)


  async function onEdit(e) {
    e.preventDefault();

    const data = new FormData(e.target);
   
    const model = data.get("model");
    const imageUrl = data.get("imageUrl");
    const year = data.get("year");
    const mileage = data.get("mileage");
    const contact = data.get("contact");
    const about = data.get("about");

    if ([model, imageUrl, year, mileage, contact, about].some((f) => f == "")) {
      return alert("All fields are required!");
    }

    await updateOffer(id,{model, imageUrl, year, mileage, contact, about})

    ctx.page.redirect(`/catalog/${id}`)
  }

  ctx.render(editMotorcyclePageTemplate(offer,onEdit));
}
