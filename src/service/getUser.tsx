export const getUserAPI = async () => {
    return await fetch('http://localhost:3000/user/12').then((response) => response.json())
}