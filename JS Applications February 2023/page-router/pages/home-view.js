const rootElement = document.querySelector('#root')


const homeViewTemplate =()=> `
<h1>Welcome to Sterus Design</h1>
`
export const homeView  = ()=>{
    rootElement.innerHTML = homeViewTemplate()
}