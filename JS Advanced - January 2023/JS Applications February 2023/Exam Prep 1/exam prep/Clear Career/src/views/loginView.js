import { html } from "../../node_modules/lit-html/lit-html.js";
import { login } from "../data/auth.js";

const loginViewTemplate = (onLogin)=>html`

        <!-- Login Page (Only for Guest users) -->
        <section id="login">
          <div class="form">
            <h2>Login</h2>
            <form @submit=${onLogin} class="login-form">
              <input type="text" name="email" id="email" placeholder="email" />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
              />
              <button type="submit">login</button>
              <p class="message">
                Not registered? <a href="#">Create an account</a>
              </p>
            </form>
          </div>
        </section>
`

export const loginView = (ctx)=> {
  
  ctx.render(loginViewTemplate(onLogin))

  async function onLogin(event){
    event.preventDefault()

    const formData = new FormData(event.target)
    const email = formData.get('email')
    const password = formData.get('password')

    if(email == '' || password == ''){

      return alert('All fields are required')
    }
    
    await login(email,password)
    ctx.page.redirect('/')
  }

}