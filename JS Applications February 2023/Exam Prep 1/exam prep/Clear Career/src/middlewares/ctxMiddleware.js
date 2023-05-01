import { render } from "../../node_modules/lit-html/lit-html.js";
import { getUserData } from "../data/utility.js";
import { navTemplate } from "../views/layout.js";

const navElement = document.querySelector("#wrapper");

export const decorateCtx = (ctx, next) => {
  ctx.render = renderView;

  next();
};

function renderView(content) {
  const userData = getUserData();
  render(navTemplate(userData, content), navElement);
}
