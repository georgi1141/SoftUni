
import { html } from "../../node_modules/lit-html/lit-html.js";
import { getOfferDetails, getUserData } from "../data/utility.js";

const offerDetailsTemplate = (offer,isCreator) =>html`
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
      <span
        >${offer.description}</span
      >
    </div>
    <div id="details-requirements">
      <h4>Requirements</h4>
      <span
        >${offer.requirements}</span
      >
    </div>
  </div>
  <p>Applications: <strong id="applications">1</strong></p>
  ${isCreator ? html` <div id="action-buttons">
              <a href="/dashboard/${offer._id}/edit" id="edit-btn">Edit</a>
              <a href="/dashboard/${offer._id}/delete" id="delete-btn">Delete</a>`:null}
`

export const detailsView = async (ctx) => {
    const id = ctx.params.id

    const offerDetails = await getOfferDetails(id)
    console.log(offerDetails);
    let isCreator
    const userData = getUserData()
    if (userData){
         isCreator = offerDetails._ownerId === userData._id
    }





  ctx.render(offerDetailsTemplate(offerDetails,isCreator));


};













