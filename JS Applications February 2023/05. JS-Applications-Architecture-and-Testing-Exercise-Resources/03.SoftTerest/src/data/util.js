import {  del, get,post } from "./api.js";

const itemName = 'userData';

const getAndCreateRecipeEndpoin = '/data/ideas'
const createRecipeEndpoin = '/data/ideas'

export function getUserData() {
    return JSON.parse(localStorage.getItem(itemName));
}

export function setUserData(data) {
    return localStorage.setItem(itemName, JSON.stringify(data));
}

export function clearUserData() {
    localStorage.removeItem(itemName);
}

export function createSubminHandler(callback){
    
    return function(e){
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        callback(data,form)
    }
    
}

export async function getRecipes() {

    return get(getAndCreateRecipeEndpoin)
}

export async function createRecipe(title,description,img) {
    await post(createRecipeEndpoin,{title,description,img})
    
}

export async function getDetails(id) {

    return get(`/data/ideas/${id}`)
}

export async function deleteRecipe(id){
     del(`/data/ideas/${id}`)
}