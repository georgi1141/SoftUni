import { get, post,put } from "../data/api.js"


const itemName = 'userData'

export function getUserData(){
    return JSON.parse(localStorage.getItem(itemName))

}

export function setUserData(data){
    return localStorage.setItem(itemName,JSON.stringify(data))

}

export function clearUserData(){
     localStorage.removeItem(itemName)

}


export async function getBooks(){

    return await get('/data/books?sortBy=_createdOn%20desc')
}

export async function getBookDetails(id){
    return get (`/data/books/${id}`)
}

export async function recordBook(data){

    return await post('/data/books',data)


}

export async function getUserBooks(id){
    return await get (`/data/books?where=_ownerId%3D%22${id}%22&sortBy=_createdOn%20desc`)

}

