import {UserId} from './UserId'

interface ThemeId {
    
        "subscribers": string[],
        "posts": string[],
        "_id": string,
        "themeName": string,
        "userId": string,
        "created_at": string,
        "updatedAt": string,
        "__v": number
    
}

export interface Post{
    "likes": string[],
    "_id": string,
    "text": "Angular is the best!",
    "userId": UserId,
    "themeId": ThemeId,
    "created_at": string,
    "updatedAt": string,
    "__v": number
}