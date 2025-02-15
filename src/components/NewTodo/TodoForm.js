import React, { useState } from 'react';
import { v4 as uuidV4 } from 'uuid';
import './TodoForm.css';

const TodoForm = (props) => {
    const { addTodo } = props;
    const [todo, setTodo] = useState({
        name: '',
        description: ''
    });

    const onChangeHandler = (e) => {
        setTodo((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }

    const addTodoHandler = (e) => {
        e.preventDefault();
        const newTodo = {
            ...todo,
            id: uuidV4(),
            completed: false
        }
        addTodo(newTodo);
        setTodo({
            name: '',
            description: ''
        });
    }
    return (
        <form className='form_container'>
            <input type='text' placeholder='enter the todo name' name='name' value={todo?.name} onChange={onChangeHandler} />
            <input type='text' placeholder='enter the todo description' name='description' value={todo?.description} onChange={onChangeHandler} />
            <button type='button' className='btn' onClick={addTodoHandler}>Add Todo</button>

        </form>
    )
}

export default TodoForm;