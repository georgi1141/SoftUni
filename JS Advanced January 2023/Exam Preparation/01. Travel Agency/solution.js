window.addEventListener("load", solution);

function solution() {
  const edinBtn = document.querySelector("#editBTN");
  const continueBtn = document.querySelector("#continueBTN");
  const submitBtn = document.querySelector("#submitBTN");
  const fullNameInput = document.querySelector("#fname");
  const emailInput = document.querySelector("#email");
  const phoneNumberElement = document.querySelector("#phone");
  const addressElement = document.querySelector("#address");
  const codeElement = document.querySelector("#code");
  const infoPreviewElement = document.querySelector("#infoPreview");
  const blockDivElement = document.querySelector("#block");

  submitBtn.addEventListener("click", () => {
    if (fullNameInput.value != "" && emailInput.value != "") {
      const liElement = document.createElement("li");
      let nameText = fullNameInput.value;
      liElement.textContent = `Full name: ${nameText}`;
      infoPreviewElement.appendChild(liElement);

      const liElementEmail = document.createElement("li");
      let emailText = emailInput.value;
      liElementEmail.textContent = `Email: ${emailText}`;
      infoPreviewElement.appendChild(liElementEmail);

      const liElementPhone = document.createElement("li");
      let phoneText = phoneNumberElement.value;
      liElementPhone.textContent = `Phone Number: ${phoneText}`;
      infoPreviewElement.appendChild(liElementPhone);

      const liElementAddress = document.createElement("li");
      let addressText = addressElement.value;
      liElementAddress.textContent = `Address: ${addressText}`;
      infoPreviewElement.appendChild(liElementAddress);

      const liElementCode = document.createElement("li");
      let codeText = codeElement.value;
      liElementCode.textContent = `Postal Code: ${codeText}`;
      infoPreviewElement.appendChild(liElementCode);

      submitBtn.disabled = true;
      edinBtn.disabled = false;
      continueBtn.disabled = false;

      fullNameInput.value = "";
      emailInput.value = "";
      phoneNumberElement.value = "";
      addressElement.value = "";
      codeElement.value = "";

      edinBtn.addEventListener("click", () => {
        fullNameInput.value = nameText;
        emailInput.value = emailText;
        phoneNumberElement.value = phoneText;
        addressElement.value = addressText;
        codeElement.value = codeText;
        infoPreviewElement.innerHTML = "";
        submitBtn.disabled = false;
        edinBtn.disabled = true;
        continueBtn.disabled = true;
      });

      continueBtn.addEventListener("click", () => {
        blockDivElement.innerHTML = "";
        const h3Element = document.createElement("h3");
        h3Element.textContent = "Thank you for your reservation!";
        blockDivElement.appendChild(h3Element);
      });
    }
  });
}
