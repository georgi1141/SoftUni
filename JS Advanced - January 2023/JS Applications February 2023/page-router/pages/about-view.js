const rootElement = document.querySelector('#root')


const aboutViewTemplate =()=> `
<h1>About us</h1>
`
export const aboutView  = ()=>{
    rootElement.innerHTML = aboutViewTemplate()
}