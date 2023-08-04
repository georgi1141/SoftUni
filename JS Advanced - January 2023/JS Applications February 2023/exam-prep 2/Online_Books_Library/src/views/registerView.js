import {html} from 'lit-html'
import { register } from '../data/auth.js'



const registerViewTemplate = (onReg)=> html`
    <section id="register-page" class="register">
            <form @submit=${onReg} id="register-form" action="" method="">
                <fieldset>
                    <legend>Register Form</legend>
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
                    <p class="field">
                        <label for="repeat-pass">Repeat Password</label>
                        <span class="input">
                            <input type="password" name="confirm-pass" id="repeat-pass" placeholder="Repeat Password">
                        </span>
                    </p>
                    <input class="button submit" type="submit" value="Register">
                </fieldset>
            </form>
        </section>
`


export async function registerView(ctx){

    async function onReg(e) {
        e.preventDefault()

        const data = new FormData(e.target)
        const email = data.get('email')
        const password = data.get('password')
        const repass = data.get('confirm-pass')

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