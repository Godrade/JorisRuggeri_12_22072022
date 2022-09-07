export const getUserPerformanceAPI = async () => {
    const response = await fetch('http://localhost:3000/user/12/performance').then((response) => response.json())
    return response.data
}