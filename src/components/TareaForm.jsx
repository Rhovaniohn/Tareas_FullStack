import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createTarea, reset } from '../features/tareas/tareaSlice'
import { toast } from 'react-toastify'

import React from 'react'

const TareaForm = () => {

    const [texto, setTexto ] = useState('')

    const dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault()

        if (e){
            toast.error('Agregar tarea')
        }

        dispatch(createTarea({texto}))
        setTexto('')
    }

  return (
    <section className='form'>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor='texto'>Tarea:</label>
                <section className="container">
                <input type="text" name="texto" id="texto" value={texto} onChange={(e) => setTexto(e.target.value)} />                    
                </section>
                
            </div>
            <div className="form-group">
                <button type="submit" className='btn btn-block' >Agregar Tarea</button>
            </div>
        </form>
    </section>
  )
}

export default TareaForm