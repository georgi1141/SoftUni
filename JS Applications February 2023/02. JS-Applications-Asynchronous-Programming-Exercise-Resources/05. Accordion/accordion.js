async function solution() {
  const main = document.querySelector("#main");

  const url = "http://localhost:3030/jsonstore/advanced/articles/list";

  const res = await fetch(url);
  const data = await res.json();

  data.map((el) => {
    const divContainer = document.createElement("div");
    divContainer.setAttribute("class", "accordion");

    const innerDivContainer = document.createElement("div");
    innerDivContainer.setAttribute("class", "head");

    const spanHeader = document.createElement("span");
    spanHeader.textContent = el.title;

    const btn = document.createElement("button");
    btn.setAttribute("class", "button");
    btn.setAttribute("id", `${el._id}`);
    btn.textContent = "More";

    const divLast = document.createElement("div");
    divLast.setAttribute("class", "extra");

    const pElement = document.createElement("p");
    getData(el._id);

    async function getData(id) {
      const response = await fetch(
        `http://localhost:3030/jsonstore/advanced/articles/details/${id}`
      );
      const data = await response.json();
      let result = await data.content;
      pElement.textContent = result;
    }

    divLast.appendChild(pElement);
    innerDivContainer.appendChild(spanHeader);
    innerDivContainer.appendChild(btn);
    divContainer.appendChild(innerDivContainer);
    divContainer.appendChild(divLast);
    main.appendChild(divContainer);

    btn.addEventListener("click", (e) => {
      const hidden = e.target.textContent == "More";
      let element = e.target.parentNode.parentNode.children[1];
      element.style.display = hidden ? "block" : "none";
      e.target.textContent = hidden ? "Less" : "More";
    });
  });
}

solution();
