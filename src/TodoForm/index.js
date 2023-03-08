import React from 'react'
import './TodoForm.css'

function TodoForm({addTodo,setOpenModal}) {

    const [TextAreaFalse,setTextAreaFalse] = React.useState(false)

    const [newTodoValue,setNewTodoValue] = React.useState('')

    const onChange = (event) => {
       setNewTodoValue(event.target.value);
    }
    const onCancel = () => {
        setOpenModal(false);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        
        if (newTodoValue.length > 0) {
            addTodo(newTodoValue)
            setOpenModal(false);
        }
        else{
           setTextAreaFalse(true)
        }
    }

  return (
    <form onSubmit={onSubmit}>
        <label>Escribe tu nuevo TODO</label>
        <textarea 
            cols="30"
            rows="10"
            placeholder='Preparar la cena'
            value={newTodoValue}
            onChange={  onChange }
            className={`${TextAreaFalse && "textarea-false"}`}
        ></textarea>
        <div className='TodoForm-buttonContainer'>
            <button type='button' onClick={onCancel} className='cancel'>Cancelar</button>
            <button type='submit' className='submit'>Añadir</button>
        </div>
    </form>
  )
}

export {TodoForm}