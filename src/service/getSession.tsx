export interface Session {
    sessions: {
        day: number,
        sessionLength: number
    }[]
}

export const getUserSessionAPI = async ():Promise<Session> => {
    const response = await fetch('http://localhost:3000/user/12/average-sessions').then((response) => response.json())
    return response.data
}