function attachEvents() {

    const url = "http://localhost:3030/jsonstore/phonebook";

  const loadBtn = document.querySelector("#btnLoad");
  const createBtn = document.querySelector("#btnCreate");

  const ulElement = document.querySelector("#phonebook");
  const person = document.querySelector("#person");
  const phone = document.querySelector("#phone");


  loadBtn.addEventListener("click", () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        ulElement.innerHTML = "";
        Object.entries(data).forEach((el) => {
          const liElement = document.createElement("li");
          liElement.textContent = `${el[1].person}: ${el[1].phone}`;
          const deleteBtn = document.createElement("button",'Delete');
          deleteBtn.setAttribute("id", "btnDelete");
          deleteBtn.textContent = "Delete";
          deleteBtn.style.display = "inline";

          liElement.appendChild(deleteBtn);
          ulElement.appendChild(liElement);

          deleteBtn.addEventListener("click", (e) => {
            
            fetch(`${url}/${el[0]}`, {
              method: "DELETE",
              headers: {
                "content-type": "application/json",
              },
            });

            e.currentTarget.parentElement.remove();
          });
        });
      });
  });
  createBtn.addEventListener("click", () => {
    if(person.value !=='' && phone.value !== ''){
        let data = {
            person: person.value,
            phone: phone.value,
          };
      
          fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });
                
    }
    
    person.value = "";
    phone.value = "";
  });
}

attachEvents();
