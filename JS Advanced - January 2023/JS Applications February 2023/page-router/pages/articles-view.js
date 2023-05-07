const rootElement = document.querySelector('#root')


const articlesViewTemplate =()=> `
<h1>articles</h1>
<ul>
<li>galerry</li>
<li>projects</li>
<li>cars</li>
</ul>
`
export const articlesView  = ()=>{
    rootElement.innerHTML = articlesViewTemplate()
}