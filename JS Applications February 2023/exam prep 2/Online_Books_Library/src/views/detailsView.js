import { html } from "../../node_modules/lit-html/lit-html.js";
import { del } from "../data/api.js";
import { getBookDetails, getUserData } from "../data/utility.js";


const detailsTeplate = (offer,isCreator,onDelete)=>html `
  <section id="details-page" class="details">
            <div class="book-information">
                <h3>${offer.title}</h3>
                <p class="type">Type: ${offer.type}</p>
                <p class="img"><img src=${offer.imageUrl}></p>
                <div class="actions">
                    ${isCreator? html`  <a class="button" href="/${offer._id}/details/edit">Edit</a>
                    <a @click=${onDelete} class="button" href="javascript:void(0)">Delete</a>` : null}
                
                </div>
            </div>
            <div class="book-description">
                <h3>Description:</h3>
                <p>${offer.description}</p>
            </div>
        </section>
`

export async function detailsView(ctx){
    const id = ctx.params.id
    console.log(ctx)



     const offer = await getBookDetails(id)
     const user = getUserData()
     let isCreator = false
     if (user){
         isCreator = offer._ownerId == user._id
     }

     async function onDelete(){

        await del(`/data/books/${id}`)
        ctx.page.redirect('/')

     }




    ctx.render(detailsTeplate(offer,isCreator,onDelete)) 
    


}

// <!-- Bonus -->

// <!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->
// <a class="button" href="#">Like</a>

// <!-- ( for Guests and Users )  -->
// <div class="likes">
//     <img class="hearts" src="/images/heart.png">
//     <span id="total-likes">Likes: 0</span>
// </div>
