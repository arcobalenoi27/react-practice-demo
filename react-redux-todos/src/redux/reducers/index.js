import { combineReducers } from 'redux'
import todosList from './todosList'
import todosFilter from './todosFilter'

export default combineReducers({
  todosList,
  todosFilter
});
