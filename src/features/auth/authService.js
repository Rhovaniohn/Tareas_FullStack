import axios from 'axios'

const API_URL = 'https://good-tick-jodhpurs.cyclic.app/api/users/'

//Registrar un usuario
const register = async (userData) => {
    const response = await axios.post(API_URL, userData)


    // if (responde.data){
    //     localStorage.setItem('user',JSON.stringify(response.data))
    // }

    return response.data
}

// Login
const login = async (userData) => {
    const response = await axios.post(API_URL + 'login', userData)

    if (response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

// Logout
const logout = () => {
    localStorage.removeItem('user')
}

const authService = {
    register,
    logout,
    login
}

export default authService