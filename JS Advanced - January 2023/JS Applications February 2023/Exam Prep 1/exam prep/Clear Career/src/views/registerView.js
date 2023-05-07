import { html } from "../../node_modules/lit-html/lit-html.js";
import { register } from "../data/auth.js";

const registerViewTemplate = (onRegister) => html`
  <!-- Register Page (Only for Guest users) -->
  <section id="register">
    <div class="form">
      <h2>Register</h2>
      <form @submit=${onRegister} class="login-form">
        <input
          type="text"
          name="email"
          id="register-email"
          placeholder="email"
        />
        <input
          type="password"
          name="password"
          id="register-password"
          placeholder="password"
        />
        <input
          type="password"
          name="re-password"
          id="repeat-password"
          placeholder="repeat password"
        />
        <button type="submit">register</button>
        <p class="message">Already registered? <a href="#">Login</a></p>
      </form>
    </div>
  </section>
`;

export const registerView = (ctx) => {
  ctx.render(registerViewTemplate(onRegister));

  async function onRegister(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    const rePassword = formData.get("re-password");

    if (password !== rePassword) {
      alert("Passwords do not match");
      return;
    }
    if (email === "" || password === "" || rePassword === "") {
      alert("All fields are required");
      return;
    }

    await register(email, password);
    ctx.page.redirect("/");
  }
};
