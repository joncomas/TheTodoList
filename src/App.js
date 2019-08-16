import React, { Component } from 'react'
import { Router, Route, Switch } from "react-router";
import './App.css';
import Todos from './components/Todos'
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'
import uuid from 'uuid'
export class App extends Component {
  state = {
    todos: [
      {
      id: uuid.v4(),
      title: 'Take out the trash',
      completed: false
    },
    {
      id: 2,
      title: 'Dinner with wife',
      completed: false
    },
    {
      id: 3,
      title: 'Meeting with boss',
      completed: false
    },
    {
      id: 4,
      title: 'Take out the dog',
      completed: false
    },
    {
      id: 5,
      title: 'Dinner with clown',
      completed: false
    },
    {
      id: 6,
      title: 'Meeting with bird',
      completed: false
    }
  ]
  }


  //Mark Complete
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed= !todo.completed;
      }
      return todo;
    }) })
  }
  //Delete todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  } 

  //Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false
    }
    this.setState({todos: [...this.state.todos, newTodo]})
  }

  
  render() {
    return (
      <div>
        <div className="app">
          <div className="container">
          <Header/>
          <AddTodo addTodo={this.addTodo}/>
          <Todos  todos={this.state.todos} 
                  markComplete={this.markComplete}
                  delTodo={this.delTodo} />
          </div>
        </div>
      </div>
    )
  }
}

export default App

