
const url = "http://localhost:3030/jsonstore/users"

export const getAllUsers = async ()=>{

    try {
        const response = await fetch(url)
        const data = await response.json()
        const users = Object.values(data)
        return users
        
    } catch (error) {
        alert(error)
        
    }

}