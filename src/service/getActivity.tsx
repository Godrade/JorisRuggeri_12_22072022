export interface Activity {
    sessions: {
        day: string,
        kilogram: number,
        calories: number
    }[]
}

export const getUserActivityAPI = async ():Promise<Activity> => {
    const response = await fetch('http://localhost:3000/user/12/activity').then((response) => response.json())
    return response.data
}