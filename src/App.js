import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      todosList:[],
      input: "",
      completed: false
    }
  }

  changeHandler = event => {
    this.setState({[event.target.name]: event.target.value })
  }

  addToDo = event => {
    let newToDo = {
      task: this.state.input,
      id: Date.now(),
      completed:false
    }
    this.setState({todosList: [...this.state.todosList, newToDo]})
  
  }
  render() {
    return (
      <div className="main-container">
        <h2>Welcome to your Todo App!</h2>
        <div className="todo-body">
          <TodoList  todosList ={this.state.todosList} />
          <TodoForm addTodo = {this.addToDo} changeHandler = {this.changeHandler} input={this.state.input}/>

        </div>
        

      </div>
    );
  }
}

export default App;
