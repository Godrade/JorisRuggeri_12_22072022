export const getUserPerformanceAPI = async () => {
    return await fetch('http://localhost:3000/user/12/performance').then((response) => response.json())
}