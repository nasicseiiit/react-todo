import React from 'react';
import TodoItems from './TodoItems';
import './TodoItems.css'

const Todo = () => {
    return(
        <div className='todo'
        style={{marginLeft:'600px'}}
        >
        <h3 className='header'>Todo</h3>
        <p>Welcome to Todo App</p>
        <TodoItems/>
        
        
        </div>
    )

}

export default Todo;