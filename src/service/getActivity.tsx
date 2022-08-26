export const getUserActivityAPI = async () => {
    return await fetch('http://localhost:3000/user/12/activity').then((response) => response.json())
}