import React, { Component } from 'react'
import AddTodo from '../containers/AddTodo'
import TodosList from '../containers/TodosList'
import FiltersList from '../containers/FiltersList'

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
