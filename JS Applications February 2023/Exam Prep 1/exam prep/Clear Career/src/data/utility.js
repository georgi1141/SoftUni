import { post,get, del,put } from "./api.js"

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

export async function createOffer(data){

    await post('/data/offers',data)

}
export async function editOffer(id,data){

    return await put(`/data/offers/${id}`,data)

}

export async function getJobOffers(){

    return await get('/data/offers?sortBy=_createdOn%20desc')

}

export async function getOfferDetails(id){
    return await get(`/data/offers/${id}`)

}

export async function deleteOffer(id){

   return await del(`/data/offers/${id}`)
}
