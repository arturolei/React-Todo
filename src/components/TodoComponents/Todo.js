import React from 'react';
import './Todo.css';

const Todo = props => {
    return (
        <div className={`todo-item${props.taskCompleted ? " completed":""}`} 
             onClick={(event) => props.markCompleted(event,props.taskId)}
        >
            {props.todoText}
        </div>
    )
}

export default Todo; 