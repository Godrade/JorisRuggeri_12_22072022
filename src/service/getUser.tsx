export interface User {
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

export const getUserAPI = async ():Promise<User> => {
    const response = await fetch('http://localhost:3000/user/12').then((response) => response.json())
    return response.data
}