import { html } from "../../node_modules/lit-html/lit-html.js";

const user = html`
  <!-- Logged-in users -->
  <div class="user">
    <a href="/create-offer">Create Offer</a>
    <a href="/logout">Logout</a>
  </div>
`;

const guest = html`
  <!-- Guest users -->
  <div class="guest">
    <a href="/login">Login</a>
    <a href="/register">Register</a>
  </div>
`;

export const navTemplate = (userData, content) => html`
  <!-- Navigation -->
  <header>
    <a id="logo" href="/"
      ><img id="logo-img" src="./images/logo.jpg" alt=""
    /></a>
    <nav>
      <div>
        <a href="/dashboard">Dashboard</a>
      </div>
      ${userData ? user : guest}
    </nav>
  </header>
  <main>${content}</main>
`;
