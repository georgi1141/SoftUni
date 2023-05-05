import { html } from "../../node_modules/lit-html/lit-html.js";
import { logout } from "../data/auth.js";
import page from '../../node_modules/page/page.mjs'

async function logoutUser(){
  page.redirect('/')
  await logout()
  
}


export const navTemplate = (userData,content) => html`
  <header id="site-header">
    <nav class="navbar">
      <section class="navbar-dashboard">
        <a href="/">Dashboard</a>
        ${userData
          ? html` <div id="user">
              <span>Welcome, ${userData.email}</span>
              <a class="button" href="/myBooks">My Books</a>
              <a class="button" href="/addBook">Add Book</a>
              <a @click=${logoutUser} class="button" href="javascript:void(0)">Logout</a>
            </div>`
          : html` <div id="guest">
              <a class="button" href="/login">Login</a>
              <a class="button" href="/register">Register</a>
            </div>`}
      </section>
    </nav>
  </header>
  <main id="site-content">${content}</main>
`;

