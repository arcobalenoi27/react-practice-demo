import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Todo from './Todo'

class TodosList extends Component {
  render() {
    return (
      <ul>
      { this.props.todosList.map( (todo)=>
          <Todo
              key={todo.id}
              {...todo}
              />
          )}
      </ul>
    )
  }
}

TodosList.propTypes = {
  todosList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }
  ).isRequired).isRequired
}

export default connect( (state, ownProps) => {
  const {todosList, todosFilter} = state.todos;
  switch (todosFilter) {
    case 'SHOW_ALL':
        return {todosList: todosList};
    case 'SHOW_ACTIVE':
        return {todosList: todosList.filter( (todo) => !todo.completed)};
    case 'SHOW_COMPLETED':
        return {todosList: todosList.filter( (todo) => todo.completed)};
    default:
      return console.error('unexpected "todosFilter" : ', todosFilter)
  }
}, null
)(TodosList)
