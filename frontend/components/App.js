import React from 'react'
import TodoList from './TodoList'
import Form from './Form'

export default class App extends React.Component {
  constructor() {
    super(); 
    this.state = {
      todos: [],
      task: ''
    }
    }
    handleInputChange = (event) => {
      this.setState({ task: event.target.value })
    }
    handleAddTodo = (event) => {
      event.preventDefault();
      const newTodo = {
        task: this.state.task,
        id: Date.now(),
        completed: false,
      }
      this.setState((prevState) => ({
        todos: [...prevState.todos, newTodo],
        task: '',
      }))
    }
    toggleTodoComplete = (id) => {
      this.setState((prevState) => ({
        todos: prevState.todos.map((todo) =>
        todo.id === id ? {...todo, completed: !todo.completed} : todo
        )
      }))
    }
    clearCompleted = () => {
      this.setState((prevState) => ({
        todos: prevState.todos.filter((todo) => !todo.completed),
      }))
    }

    render() {
      return (
      <div>
        
        <Form 
        task={this.state.task}
        handleInputChange={this.handleInputChange}
        handleAddTodo={this.handleAddTodo}
        clearCompleted={this.clearCompleted}
        />
        <TodoList 
        todos={this.state.todos}
        toggleTodoComplete={this.toggleTodoComplete}
        />
      </div>
    );
  }
}


