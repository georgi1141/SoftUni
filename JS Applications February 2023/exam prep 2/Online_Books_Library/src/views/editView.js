import { html } from "../../node_modules/lit-html/lit-html.js";
import { put } from "../data/api.js";
import { getBookDetails } from "../data/utility.js";




const editTemplate = (offer,editHandler)=>html`
<section id="edit-page" class="edit">
            <form @submit=${editHandler} id="edit-form" action="#" method="">
                <fieldset>
                    <legend>Edit my Book</legend>
                    <p class="field">
                        <label for="title">Title</label>
                        <span class="input">
                            <input type="text" name="title" id="title" .value=${offer.title}>
                        </span>
                    </p>
                    <p class="field">
                        <label for="description">Description</label>
                        <span class="input">
                            <textarea .value=${offer.description} name="description"
                                id="description"></textarea>
                        </span>
                    </p>
                    <p class="field">
                        <label for="image">Image</label>
                        <span class="input">
                            <input type="text" name="imageUrl" id="image" .value=${offer.imageUrl}>
                        </span>
                    </p>
                    <p class="field">
                        <label for="type">Type</label>
                        <span class="input">
                            <select id="type" name="type" .value=${offer.type}>
                                <option value="Fiction" selected>Fiction</option>
                                <option value="Romance">Romance</option>
                                <option value="Mistery">Mistery</option>
                                <option value="Classic">Clasic</option>
                                <option value="Other">Other</option>
                            </select>
                        </span>
                    </p>
                    <input class="button submit" type="submit" value="Save">
                </fieldset>
            </form>
        </section>
`


export async function editView(ctx){
    const id = ctx.params.id;

    const offer = await getBookDetails(id);

    async function editHandler(event){
        event.preventDefault();

        const formData = new FormData(event.target);
        const title = formData.get('title');
        const description = formData.get('description');
        const imageUrl = formData.get('imageUrl');
        const type = formData.get('type');

        if(title === '' || description === '' || imageUrl === '' || type === ''){
            return alert('All fields are required');
        }

        await put(`/data/books/${id}`,{title,description,imageUrl,type})
        ctx.page.redirect(`/${id}/details`);

    }


    ctx.render(editTemplate(offer,editHandler))


}