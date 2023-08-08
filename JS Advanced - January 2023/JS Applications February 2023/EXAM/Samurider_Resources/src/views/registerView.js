import {html} from '../../node_modules/lit-html/lit-html.js'
import { register } from '../data/auth.js'



const registerViewTemplate = (onReg)=> html`


<section id="register">
          <div class="form">
            <h2>Register</h2>
            <form @submit=${onReg} class="register-form">
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
              <p class="message">Already registered? <a href="/login">Login</a></p>
            </form>
          </div>
        </section>




`


export async function registerView(ctx){

    async function onReg(e) {
        e.preventDefault()

        const data = new FormData(e.target)
        const email = data.get('email')
        const password = data.get('password')
        const repass = data.get('re-password')

        if (email == '' || password == '' || repass == '') {
            return alert('All fields are required')
        }
        if (password != repass){
            return alert('Passwords do not match!')
        }

        await register(email, password)
        ctx.page.redirect('/')
    }

    ctx.render(registerViewTemplate(onReg))


}