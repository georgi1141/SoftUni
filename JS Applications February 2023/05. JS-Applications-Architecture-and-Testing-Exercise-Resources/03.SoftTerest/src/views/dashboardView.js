import { html } from "../../node_modules/lit-html/lit-html.js";

const dashboardTemplate = () => html`   <div id="dashboard-holder">
<div class="card overflow-hidden current-card details" style="width: 20rem; height: 18rem;">
    <div class="card-body">
        <p class="card-text">Dinner Recipe</p>
    </div>
    <img class="card-image" src="./images/dinner.jpg" alt="Card image cap">
    <a class="btn" href="">Details</a>
</div>
<div class="card overflow-hidden current-card details" style="width: 20rem; height: 18rem;">
    <div class="card-body">
        <p class="card-text">4 easy DIY ideas to try!</p>
    </div>
    <img class="card-image" src="./images/brightideacropped.jpg" alt="Card image cap">
    <a class="btn" href="">Details</a>
</div>
<div class="card overflow-hidden current-card details" style="width: 20rem; height: 18rem;">
    <div class="card-body">
        <p class="card-text">Best Pilates Workouts to Do at Home</p>
    </div>
    <img class="card-image" src="./images/best-pilates-youtube-workouts-2__medium_4x3.jpg" alt="Card image cap">
    <a class="btn" href="">Details</a>
</div>
<h1>No ideas yet! Be the first one :)</h1>
</div>

`

export async function dashboardView(ctx) {
  return ctx.render(dashboardTemplate());

}





// details ==========> TODO


// <div class="container home some">
// <img class="det-img" src="./images/dinner.jpg" />
// <div class="desc">
//     <h2 class="display-5">Dinner Recipe</h2>
//     <p class="infoType">Description:</p>
//     <p class="idea-description">There are few things as comforting as heaping bowl of pasta at the end of a long
//         day. With so many easy pasta recipes out there, there's something for every palate to love. That's why
//         pasta
//         makes such a quick, easy dinner for your family—it's likely to satisfy everyone's cravings, due to its
//         versatility.</p>
// </div>
// <div class="text-center">
//     <a class="btn detb" href="">Delete</a>
// </div>
// </div>

























