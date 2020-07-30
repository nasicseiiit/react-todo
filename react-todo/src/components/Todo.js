import React from 'react';
import TodoItems from './TodoItems';
import './TodoItems.css';

const Todo = () => {
    return(
        <div className='todo'
        style={{marginLeft:'600px'}}
        >
        <h1 className='header'>Welcome to Todo App</h1>
        <TodoItems/>
        
        
        </div>
    )

}

export default Todo;