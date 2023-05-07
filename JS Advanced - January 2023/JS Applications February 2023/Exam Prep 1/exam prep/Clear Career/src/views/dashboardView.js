import { html } from "../../node_modules/lit-html/lit-html.js";
import { getJobOffers } from "../data/utility.js";

const dashboardViewTemplate = (jobOffers)=>html`
<!-- Dashboard page -->
<section id="dashboard">
          <h2>Job Offers</h2>
            ${jobOffers.length >0 ? jobOffers.map(job => html`
            <div class="offer">
            <img src="${job.imageUrl}" alt="example1" />
            <p>
              <strong>Title: </strong><span class="title">${job.title}</span>
            </p>
            <p><strong>Salary:</strong><span class="salary">${job.salary}</span></p>
            <a class="details-btn" href="/dashboard/${job._id}">Details</a>
          </div>
          `) : html`<h2>No offers yet.</h2>`}
          
        </section>
`

export const dashboardView = async (ctx)=> {
 
  const jobOffers = await getJobOffers()

  ctx.render(dashboardViewTemplate(jobOffers))


}