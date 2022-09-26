//import { Session } from "../models/Session"

export interface SessionAPI {
    sessions: {
        day: number,
        sessionLength: number
    }[]
}

export const getUserSessionAPI = async ():Promise<SessionAPI> => {
    const response = await fetch('http://localhost:3000/user/12/average-sessions').then((response) => response.json())

    console.log('API', response);
    //return response.data.sessions.map(session => new Session(session))
    return response.data
}