import { html } from "lit-html";
import { getUserData, recordBook } from "../data/utility.js";

const addBookTemplate = (createBook) => html`
  <section id="create-page" class="create">
    <form @submit=${createBook} id="create-form" action="" method="">
      <fieldset>
        <legend>Add new Book</legend>
        <p class="field">
          <label for="title">Title</label>
          <span class="input">
            <input type="text" name="title" id="title" placeholder="Title" />
          </span>
        </p>
        <p class="field">
          <label for="description">Description</label>
          <span class="input">
            <textarea
              name="description"
              id="description"
              placeholder="Description"
            ></textarea>
          </span>
        </p>
        <p class="field">
          <label for="image">Image</label>
          <span class="input">
            <input type="text" name="imageUrl" id="image" placeholder="Image" />
          </span>
        </p>
        <p class="field">
          <label for="type">Type</label>
          <span class="input">
            <select id="type" name="type">
              <option value="Fiction">Fiction</option>
              <option value="Romance">Romance</option>
              <option value="Mistery">Mistery</option>
              <option value="Classic">Clasic</option>
              <option value="Other">Other</option>
            </select>
          </span>
        </p>
        <input class="button submit" type="submit" value="Add Book" />
      </fieldset>
    </form>
  </section>
`;

export async function addBookView(ctx) {
  async function createBook(e) {
    e.preventDefault();

    const data = new FormData(e.target);
    const title = data.get("title");
    const description = data.get("description");
    const imageUrl = data.get("imageUrl");
    const type = data.get("type");

    if (title=='' || description=='' || imageUrl=='' || type=='') {
      return alert("Please fill in all fields");
    }
    const userData = getUserData();

    if (!userData) {
      ctx.page.redirect("/login");

      return alert("Please login to create an offer!");
    }

    recordBook({title, description, imageUrl, type});
    ctx.page.redirect("/");
  }

  ctx.render(addBookTemplate(createBook));
}
