import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { setTodoFilter } from '../../redux/actions/todos'

const Filter = ({active, children, onFilter }) => {
  if(active) {
    return <span>{ children }</span>
  }
  return (
    <a href="#" onClick={ (e)=> {
        e.preventDefault()
        onFilter()
    }}
    >
      { children }
    </a>
  )
}

Filter.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onFilter: PropTypes.func.isRequired
}

export default connect( (state, ownProps) => ({
  active: state.todosFilter === ownProps.filter
}), (dispatch, ownProps) => {
    return {
      onFilter: () => {
        dispatch(setTodoFilter(ownProps.filter))
      }
    }
}
)(Filter)
