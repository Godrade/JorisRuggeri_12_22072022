import {Session} from "../models/Session"

export interface SessionAPI {
    day: number,
    sessionLength: number
}

export interface SessionsAPI {
    sessions: SessionAPI[]
}

export const getUserSessionAPI = async (): Promise<Session[]> => {
    const response = await fetch('http://localhost:3000/user/12/average-sessions').then((response) => response.json()).then((response) => response.data)
    // const response = await fetch('data/averageSessionData.json',{
    //     headers : { 
    //       'Content-Type': 'application/json',
    //       'Accept': 'application/json'
    //      }
    //   }).then((response) => {  
    //     return response.json();
    // })
    return response.sessions.map((session) => new Session(session))
}