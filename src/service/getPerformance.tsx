import {Performance} from "../models/Performance"

export interface PerformanceAPI {
    data: PerformanceDataAPI[],
    kind: {
        1: string,
        2: string,
        3: string,
        4: string,
        5: string,
        6: string
    }
}

export interface PerformanceDataAPI {
    value: number,
    kind: number
}

/**
 * Functions to fetch the data from the backend API or from the mock data
 * @return {Promise<Performance>} Promise representing performance data
 */
export const getUserPerformanceAPI = async (): Promise<Performance[]> => {
    const response = await fetch('http://localhost:3000/user/12/performance').then((response) => response.json()).catch(test => {console.log(1);}).then((response) => response.data)
    // const response = await fetch('data/performanceData.json',{
    //     headers : { 
    //       'Content-Type': 'application/json',
    //       'Accept': 'application/json'
    //      }
    //   }).then((response) => {  
    //     return response.json();
    // })
    return response.data.map((performance) => new Performance(performance, response.kind))
}