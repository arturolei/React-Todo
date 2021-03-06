import React from 'react';
import './Todo.css';

const TodoForm = props => {
    
    return(
        <div className= "submit-form">
            <form>
                <input 
                type='text' 
                placeholder='task' 
                name='input' 
                value={props.input}
                onChange= {props.changeHandler}
                />
                <button onClick={props.addToDo} disabled = {props.inputState.length === 0 ? true :false}>Add Task</button>
                <button onClick={props.clearCompleted}>Clear Completed</button>
            </form>
        </div>
    )
   
}

export default TodoForm;