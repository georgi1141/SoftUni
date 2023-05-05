import { html } from "../../node_modules/lit-html/lit-html.js";
import { getBooks } from "../data/utility.js";



const dashTemplate = (allBooks)=>html`
<section id="dashboard-page" class="dashboard">
<h1>Dashboard</h1>
${allBooks? allBooks.map(book=>html`<ul class="other-books-list">
    <li class="otherBooks">
        <h3>${book.title}</h3>
        <p>${book.type}</p>
        <p class="img"><img src=${book.imageUrl}></p>
        <a class="button" href=/${book._id}/details>Details</a>
    </li>
</ul>`): html`
<p class="no-books">No books in database!</p>


`}
</section>
`


export async function dashView(ctx){


    const allBooks = await getBooks() 

    ctx.render(dashTemplate(allBooks))


}