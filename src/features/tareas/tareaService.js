import axios from "axios"

const API_URL = 'https://good-tick-jodhpurs.cyclic.app/api/tareas/'


// Crear una nueva tarea
const createTarea = async (tareaData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL, tareaData, config)
    return response.data
}

// Obtener las tareas del usuario
const getTareas = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(API_URL, config)
    return response.data
}

// Borrar tarea del usuario
const borrarTareas = async (id, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.delete(API_URL + id, config)
    return response.data
}

const tareaService = {
    createTarea,
    getTareas,
    borrarTareas
}

export default tareaService