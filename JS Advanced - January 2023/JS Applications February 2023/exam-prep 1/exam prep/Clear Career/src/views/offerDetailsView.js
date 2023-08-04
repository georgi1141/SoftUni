import { html } from "lit-html";
import {
  apply,
  getApplications,
  getUserApplication,
} from "../data/applications.js";
import { getOfferDetails, getUserData } from "../data/utility.js";

const offerDetailsTemplate = (offer, onApply) => html`
  <section id="details">
    <div id="details-wrapper">
      <img id="details-img" src=${offer.imageUrl} alt="example1" />
      <p id="details-title">${offer.title}</p>
      <p id="details-category">
        Category: <span id="categories">${offer.category}</span>
      </p>
      <p id="details-salary">
        Salary: <span id="salary-number">${offer.salary}</span>
      </p>
      <div id="info-wrapper">
        <div id="details-description">
          <h4>Description</h4>
          <span>${offer.description}</span>
        </div>
        <div id="details-requirements">
          <h4>Requirements</h4>
          <span>${offer.requirements}</span>
        </div>
      </div>
      <p>
        Applications: <strong id="applications">${offer.applications}</strong>
      </p>
      <div id="action-buttons">
        ${offer.canEdit || offer.canApply
          ? html` ${offer.canEdit
              ? html` <a href="/dashboard/${offer._id}/edit" id="edit-btn"
                    >Edit</a
                  >
                  <a href="/dashboard/${offer._id}/delete" id="delete-btn"
                    >Delete</a
                  >`
              : null}`
          : null}
        ${offer.canApply
          ? html`<a @click=${onApply} href="javascript:void(0)" id="apply-btn"
              >Apply</a
            >`
          : null}
      </div>
    </div>
  </section>
`;

export const detailsView = async (ctx) => {
  const id = ctx.params.id;

  const requests = [getOfferDetails(id), getApplications(id)];
  const userData = getUserData();

  if (userData) {
    requests.push(getUserApplication(id, userData._id));
  }

  const [offerDetails, applications, hasApplied] = await Promise.all(requests);
  offerDetails.applications = applications;

  if (userData) {
    offerDetails.canEdit = offerDetails._ownerId === userData._id;
    offerDetails.canApply = offerDetails.canEdit == false && hasApplied == 0;
  }

  async function onApply() {
    await apply(id);
    offerDetails.applications++;
    offerDetails.canApply = false;

    ctx.render(offerDetailsTemplate(offerDetails, onApply));
  }

  ctx.render(offerDetailsTemplate(offerDetails, onApply));
};
