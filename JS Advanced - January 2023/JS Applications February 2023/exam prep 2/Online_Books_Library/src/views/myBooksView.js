import { html } from "../../node_modules/lit-html/lit-html.js";
import { getUserBooks, getUserData } from "../data/utility.js";

export const myBooksTemplate = (books) => html`
  <section id="my-books-page" class="my-books">
    <h1>My Books</h1>

    <ul class="my-books-list">
      ${books.length > 0
        ? books.map(
            (book) =>
              html`<li class="otherBooks">
                <h3>${book.title}</h3>
                <p>Type: ${book.type}</p>
                <p class="img"><img src=${book.imageUrl} /></p>
                <a class="button" href=/${book._id}/details>Details</a>
              </li>`
          )
        : html`<p class="no-books">No books in database!</p>`}
    </ul>
  </section>
`;

export async function myBooksView(ctx) {
  const user = getUserData();
  let books;
  if (user) {
    books = await getUserBooks(user._id);
  }

  ctx.render(myBooksTemplate(books));
}
