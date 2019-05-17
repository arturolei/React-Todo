import React from 'react';
import './Todo.css';

const Todo = props => {
    return (
        <div className="todo-item" 
             key={props.taskId} 
             onClick={(event, id) => props.markCompleted(event,props.taskId)}
        >
            {props.todoText}
        </div>
    )
}

export default Todo; 