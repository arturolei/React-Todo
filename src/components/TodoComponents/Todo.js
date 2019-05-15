import React from 'react';
import './Todo.css';

const Todo = props => {
    return (
        <div className="todo-item">
            {props.todoText}
        </div>
    )
}

export default Todo; 