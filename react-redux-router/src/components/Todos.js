import React, { Component } from 'react'
import AddTodo from '../containers/todos/AddTodo'
import TodosList from '../containers/todos/TodosList'
import FiltersList from '../containers/todos/FiltersList'

export default class Todos extends Component {
  render() {
    return (
      <div>
        <h2>Todolist</h2>
        <AddTodo />
        <TodosList />
        <FiltersList />
      </div>
    )
  }
}
