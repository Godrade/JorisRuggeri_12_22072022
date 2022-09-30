import {User} from "../models/User"

export interface UserAPI {
    keyData: {
        calorieCount: number,
        proteinCount: number,
        carbohydrateCount: number,
        lipidCount: number
    }
    todayScore: number,
    userInfos: {
        firstName: string
    }
}

export const getUserAPI = async (): Promise<User> => {
    const response = await fetch('http://localhost:3000/user/12').then((response) => response.json()).then((response) => response.data)
    // const response = await fetch('data/userData.json',{
    //     headers : { 
    //       'Content-Type': 'application/json',
    //       'Accept': 'application/json'
    //      }
    //   }).then((response) => {  
    //     return response.json();
    // })
    return new User(response);
}