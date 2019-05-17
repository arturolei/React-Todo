import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import './components/TodoComponents/Todo.css';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      todosList:[],
      input: "",
    }
  }

  changeHandler = event => {
    this.setState({[event.target.name]: event.target.value })
  }

  addToDo = event => {
    event.preventDefault();
    let newToDo = {
      task: this.state.input,
      id: Date.now(),
      completed:false
    }
    this.setState({todosList: [...this.state.todosList, newToDo], input:""})
   

  }

  clearCompleted = (event) =>{
    event.preventDefault();
    this.setState({todosList: this.state.todosList.filter(item => !item.completed)});
  };

  markCompleted = (event, id) => {
    this.setState({
      todosList: this.state.todosList.map(item => {
        if (item.id === id){
          item.completed = !item.completed;
          
        }
        return item;
      })
    })
  };

  render() {
    return (
      <div className="main-container">
        <h2>Welcome to your Todo App!</h2>
        <div className="todo-body">
          <TodoList todosList = {this.state.todosList} markCompleted ={this.markCompleted} />
          <TodoForm addToDo = {this.addToDo} changeHandler ={this.changeHandler} inputState ={this.state.input} clearCompleted = {this.clearCompleted}/>
        </div>
        

      </div>
    );
  }
}

export default App;

/*{
          return {
            ...item,
            completed: true ? false: true 
          }
        } else {
          return item;
        } */