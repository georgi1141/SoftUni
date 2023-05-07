import { html } from "../../node_modules/lit-html/lit-html.js";
import { del,post } from "../data/api.js";
import { getBookDetails, getLikes, getLikesCount, getUserData } from "../data/utility.js";

const detailsTeplate = (offer, isCreator, onDelete, showLikeBtn,likesCount,likeMe) => html`
  <section id="details-page" class="details">
    <div class="book-information">
      <h3>${offer.title}</h3>
      <p class="type">Type: ${offer.type}</p>
      <p class="img"><img src=${offer.imageUrl} /></p>
      <div class="actions">
        ${isCreator
          ? html` <a class="button" href="/${offer._id}/details/edit">Edit</a>
              <a @click=${onDelete} class="button" href="javascript:void(0)"
                >Delete</a
              >`
          : null}
        ${showLikeBtn
          ? html`<a @click=${likeMe} class="button" href="javascript:void(0)">Like</a>

              `
          : null}
           <div class="likes">
                <img class="hearts" src="/images/heart.png" />
                <span id="total-likes">Likes: ${likesCount}</span>
              </div>
      </div>
    </div>
    <div class="book-description">
      <h3>Description:</h3>
      <p>${offer.description}</p>
    </div>
  </section>
`;

export async function detailsView(ctx) {
  const id = ctx.params.id;
  const likesCount = await getLikesCount(id)
  const offer = await getBookDetails(id);
  const user = getUserData();
  let isCreator = false;
  let showLikeBtn = false;

  let myLikes = false 

  if (user) {
    isCreator = offer._ownerId == user._id;
    myLikes = await getLikes(id, user._id);
    showLikeBtn = !isCreator && !myLikes;
  }
  async function onDelete() {
    const confirmed = confirm(
      `Are you sure you want to delete ${offer.title}?`
    );
    if (confirmed) {
      await del(`/data/books/${id}`);
      ctx.page.redirect("/");
    }
  }

  async function likeMe(){
    

    post('/data/likes',{bookId:id})
    ctx.page.redirect(`/${id}/details`)

  }

  ctx.render(detailsTeplate(offer, isCreator, onDelete, showLikeBtn,likesCount,likeMe));
}
