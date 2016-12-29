import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../../redux/actions/todos'

const Todo = ({id, text, completed, toggleTodo}) => (
  <li onClick={() => toggleTodo(id)} style={{
    textDecoration: completed ? 'line-through': 'none'
    }}
    >
    { text }
  </li>
)

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  toggleTodo: PropTypes.func.isRequired
}

export default connect( null, {
  toggleTodo
}
)(Todo)
