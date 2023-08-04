import { html } from "lit-html";
import { editOffer, getOfferDetails, getUserData } from "../data/utility.js";

const editViewTemplate = (offer, handleSubmit) => html`
  <section id="edit">
    <div class="form">
      <h2>Edit Offer</h2>
      <form @submit=${handleSubmit} class="edit-form">
        <input
          type="text"
          name="title"
          .value=${offer.title}
          id="job-title"
          placeholder="Title"
        />
        <input
          type="text"
          name="imageUrl"
          .value=${offer.imageUrl}
          id="job-logo"
          placeholder="Company logo url"
        />
        <input
          type="text"
          name="category"
          .value=${offer.category}
          id="job-category"
          placeholder="Category"
        />
        <textarea
          id="job-description"
          name="description"
          .value=${offer.description}
          placeholder="Description"
          rows="4"
          cols="50"
        ></textarea>
        <textarea
          id="job-requirements"
          name="requirements"
          .value=${offer.requirements}
          placeholder="Requirements"
          rows="4"
          cols="50"
        ></textarea>
        <input
          type="text"
          name="salary"
          .value=${offer.salary}
          id="job-salary"
          placeholder="Salary"
        />

        <button type="submit">post</button>
      </form>
    </div>
  </section>
`;

export async function editPageView(ctx) {
  const id = ctx.params.id;
  const offer = await getOfferDetails(id);

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
      editOffer(id, offer);
      ctx.page.redirect(`/dashboard/${id}`);
    }
  }

  ctx.render(editViewTemplate(offer, handleSubmit));
}
