import {Activity} from "../models/Activity"

export interface ActivitySessionsAPI {
    sessions: ActivityAPI[]
}

export interface ActivityAPI {
    day: string,
    kilogram: number,
    calories: number
}

/**
 * Functions to fetch the data from the backend API or from the mock data
 * @return {Promise<Activity>} Promise representing Activity data
 */
export const getUserActivityAPI = async (): Promise<Activity[]> => {
    const response = await fetch('http://localhost:3000/user/12/activity').then((response) => response.json()).then((response) => response.data)
    // const response = await fetch('data/activityData.json',{
    //     headers : { 
    //       'Content-Type': 'application/json',
    //       'Accept': 'application/json'
    //      }
    //   }).then((response) => {  
    //     return response.json();
    // })
    return response.sessions.map((session) => new Activity(session))
}