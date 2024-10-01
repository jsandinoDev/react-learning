import React from 'react'
import { useForm } from '../hooks/useForm'

export const TodoAdd = ({ onNewTodo }) => {

    const { description, onInputChange, onResetForm } = useForm({
        description: '',
    });


    const onFormSubmit = (e) => {
        e.preventDefault();
        if (description.length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            done: false,
            description: description
        }

        onNewTodo && onNewTodo(newTodo)
        onResetForm();  
    }

    
    return (
        <form onSubmit={onFormSubmit}>
            <input
                type="test"
                placeholder="Que hay que hacer?"
                className="form-control"
                name='description'
                value={description}
                onChange={onInputChange}
            />

            <button type="submit" className="btn btn-outline-primary mt-1">
                Agregar
            </button>
        </form>
    )
}
