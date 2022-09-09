export interface Performance {
    data: {
        value: number,
        kind: number
    }[],
    kind: {
        1: string,
        2: string,
        3: string,
        4: string,
        5: string,
        6: string
    }
}

export const getUserPerformanceAPI = async ():Promise<Performance> => {
    const response = await fetch('http://localhost:3000/user/12/performance').then((response) => response.json())
    return response.data
}