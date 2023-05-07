window.addEventListener("load", solve);

function solve() {
  const firstNameElement = document.querySelector("#first-name");
  const lastNameElement = document.querySelector("#last-name");
  const peopleCountElement = document.querySelector("#people-count");
  const fromDateElement = document.querySelector("#from-date");
  const daysCountElement = document.querySelector("#days-count");
  const nextBtn = document.querySelector("#next-btn");
  const ulTicketInfoElement = document.querySelector(".ticket-info-list");
  const editBtn = document.createElement("button");
  const continueBtn = document.createElement("button");
  const confirmElement = document.querySelector(".confirm-ticket");

  nextBtn.addEventListener("click", (ev) => {
    ev.preventDefault();

    if (
      firstNameElement.value != "" &&
      lastNameElement.value != "" &&
      peopleCountElement.value != "" &&
      fromDateElement.value != "" &&
      daysCountElement.value != ""
    ) {
      const liElement = document.createElement("li");
      liElement.setAttribute("class", "ticket");

      const articleElement = document.createElement("article");
      editBtn.setAttribute("class", "edit-btn");
      editBtn.textContent = "Edit";
      continueBtn.setAttribute("class", "continue-btn");
      continueBtn.textContent = "Continue";

      const h3Element = document.createElement("h3");
      let firstName = firstNameElement.value;
      let lastName = lastNameElement.value;
      h3Element.textContent = `Name: ${firstName} ${lastName}`;
      const pFromDateElement = document.createElement("p");
      let dateName = fromDateElement.value;
      pFromDateElement.textContent = `From date: ${dateName}`;
      const pDaysElement = document.createElement("p");
      let daysName = daysCountElement.value;
      pDaysElement.textContent = `For ${daysName} days`;
      const pPeopleElement = document.createElement("p");
      let pplName = peopleCountElement.value;
      pPeopleElement.textContent = `For ${pplName} people`;

      articleElement.appendChild(h3Element);
      articleElement.appendChild(pFromDateElement);
      articleElement.appendChild(pDaysElement);
      articleElement.appendChild(pPeopleElement);
      liElement.appendChild(articleElement);
      liElement.appendChild(editBtn);
      liElement.appendChild(continueBtn);
      ulTicketInfoElement.appendChild(liElement);

      nextBtn.disabled = true;

      firstNameElement.value = "";
      lastNameElement.value = "";
      peopleCountElement.value = "";
      fromDateElement.value = "";
      daysCountElement.value = "";

      editBtn.addEventListener("click", () => {
        firstNameElement.value = firstName;
        lastNameElement.value = lastName;
        peopleCountElement.value = pplName;
        fromDateElement.value = dateName;
        daysCountElement.value = daysName;

        
        liElement.remove()
        nextBtn.disabled = false;
      });

      const confirmBtn = document.createElement("button");
      confirmBtn.setAttribute("class", "confirm-btn");
      confirmBtn.textContent = "Confirm";

      const cancelBtn = document.createElement("button");
      cancelBtn.setAttribute("class", "cancel-btn");
      cancelBtn.textContent = "Cancel";

      continueBtn.addEventListener("click", () => {
        const ticketContainerElement = document.createElement("li");

        ticketContainerElement.setAttribute("class", "ticket-content");
        ticketContainerElement.appendChild(articleElement);
        ticketContainerElement.appendChild(confirmBtn);
        ticketContainerElement.appendChild(cancelBtn);
        confirmElement.appendChild(ticketContainerElement);
        editBtn.remove();
        continueBtn.remove();
        ulTicketInfoElement.innerHTML = "";
      });

      cancelBtn.addEventListener("click", () => {
        confirmElement.innerHTML = "";
        nextBtn.disabled = false;
      });
      confirmBtn.addEventListener("click", () => {
        const body = document.querySelector("#body");
        const divElement = document.querySelector("#main");
        divElement.remove();
        const h1Element = document.createElement("h1");
        h1Element.setAttribute("id", "thank-you");
        h1Element.textContent = "Thank you, have a nice day!";

        const backBtn = document.createElement("button");
        backBtn.setAttribute("id", "back-btn");
        backBtn.textContent = "Back";
        body.appendChild(h1Element);
        body.appendChild(backBtn);
      });
    }
  });
}
