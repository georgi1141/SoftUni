import page from "../node_modules/page/page.mjs";
import { render } from "../node_modules/lit-html/lit-html.js";
import { layoutTemplate } from "./views/layout.js";
import { getUserData } from "./util.js";
import { homePage } from "./views/homePage.js";
import { loginPage } from "./views/loginView.js";
import { registerView } from "./views/registerView.js";
import { logout } from "./data/auth.js";

const root = document.getElementById("root");

page(decorateContext);
page('index.html','/')
page("/", homePage);
page("/login", loginPage);
page("/register", registerView);
page("/logout", logoutAction);

function decorateContext(ctx, next) {
  ctx.render = renderView;

  next();
}

function renderView(content) {
  const userData = getUserData();
  render(layoutTemplate(userData, content), root);
}

function logoutAction(ctx) {
  logout();
  ctx.page.redirect("/");
}

page.start();
