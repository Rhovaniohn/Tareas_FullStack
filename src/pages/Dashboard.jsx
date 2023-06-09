import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import TareaForm from "../components/TareaForm"
import Spinner from '../components/Spinner'
import { toast } from 'react-toastify'
import { createTarea, getTareas, reset } from "../features/tareas/tareaSlice"
import TareaItem from "../components/TareaItem"

const Dashboard = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user} = useSelector((state) => state.auth)
    const {tareas, isLoading, isError, message} = useSelector((state) => state.tarea)
    //const emptytext = 'Por favor agrega una tarea'

    useEffect(() => {

        if(isError) {
            toast.error(message)
        }

        if(!user) {
            navigate('/login')
        }else{
            dispatch(getTareas())   
        }

        return () => {
            dispatch(reset())
        }

    }, [user, navigate, isError, message, dispatch])

    if (isLoading){
        return <Spinner />
    }

    return (
        <>
            <section className='heading'>
                <h4>Bienvenido {user && user.name} </h4>
                <p>Dashboard de Tareas</p>
            </section>

            <TareaForm />

            <section className='content'>
                {tareas.length > 0 ? (
                    <div className='tareas'>
                        {tareas.map((tarea) => (
                            <TareaItem key={tarea._id} tarea={tarea} />
                        ))}
                    </div>
                ) : (
                    <h4>Tu usuario no tiene ninguna tarea asignada</h4>
                )}
            </section>
        </>
    )
}

export default Dashboard