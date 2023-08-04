import { login } from "../data/auth.js"
import { html } from "lit-html"



const loginTemplate = (onLogin)=>html`
<section id="login-page" class="login">
            <form @submit=${onLogin} id="login-form" action="" method="">
                <fieldset>
                    <legend>Login Form</legend>
                    <p class="field">
                        <label for="email">Email</label>
                        <span class="input">
                            <input type="text" name="email" id="email" placeholder="Email">
                        </span>
                    </p>
                    <p class="field">
                        <label for="password">Password</label>
                        <span class="input">
                            <input type="password" name="password" id="password" placeholder="Password">
                        </span>
                    </p>
                    <input class="button submit" type="submit" value="Login">
                </fieldset>
            </form>
        </section>
`

export async function loginPage(ctx) {

    async function onLogin(e) {
        e.preventDefault()

        const data = new FormData(e.target)
        const email = data.get('email')
        const password = data.get('password')

        if (email == '' || password == '') {
            return alert('All fields are required')
        }
        await login(email, password)
        ctx.page.redirect('/')
    }

    ctx.render(loginTemplate(onLogin))
}