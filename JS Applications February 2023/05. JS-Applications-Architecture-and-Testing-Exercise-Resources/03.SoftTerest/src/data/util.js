

const itemName = 'userData';

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