import { html } from "../../node_modules/lit-html/lit-html.js";
import { createOffer, getUserData } from "../data/utility.js";

const createOfferTemplate = (handleSubmit) => html`
  <!-- Create Page (Only for logged-in users) -->
  <section id="create">
    <div class="form">
      <h2>Create Offer</h2>
      <form @submit=${handleSubmit} class="create-form">
        <input type="text" name="title" id="job-title" placeholder="Title" />
        <input
          type="text"
          name="imageUrl"
          id="job-logo"
          placeholder="Company logo url"
        />
        <input
          type="text"
          name="category"
          id="job-category"
          placeholder="Category"
        />
        <textarea
          id="job-description"
          name="description"
          placeholder="Description"
          rows="4"
          cols="50"
        ></textarea>
        <textarea
          id="job-requirements"
          name="requirements"
          placeholder="Requirements"
          rows="4"
          cols="50"
        ></textarea>
        <input type="text" name="salary" id="job-salary" placeholder="Salary" />

        <button type="submit">post</button>
      </form>
    </div>
  </section>
`;

export const createOfferView = (ctx) => {
  async function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const offer = Object.fromEntries(data.entries());
    const arrOffer = Object.values(offer);

    if (arrOffer.some((x) => x.length == 0)) {
      return alert("All fields are required!");
    } else {
      const userData = getUserData();

      if (!userData) {
        ctx.page.redirect("/login");
        return alert("Please login to create an offer!");
      }
      createOffer(offer);
      ctx.page.redirect("/dashboard");
    }
  }
  ctx.render(createOfferTemplate(handleSubmit));
};
