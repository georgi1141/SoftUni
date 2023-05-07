import { html, render } from "../../../node_modules/lit-html/lit-html.js";

const root = document.querySelector("#root");
const towns = document.querySelector("#towns");

let template = (data) => html` <ul>
  ${data.map((town) => html` <li>${town}</li>`)}
</ul>`;

document.querySelector("#btnLoadTowns").addEventListener("click", (e) => {
  e.preventDefault();
  if (towns.value != []) {
    let townsData = towns.value.split(", ");

    render(template(townsData), root);
  }
  towns.value = ''
});
