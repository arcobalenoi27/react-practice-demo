import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import counter from './examples1/counter'
import sum from './examples1/sum'
import getImages from './examples1/images'

import todosList from './todos/todosList'
import todosFilter from './todos/todosFilter'

import youtubeList from './youtube/list'
import youtubeLoad from './youtube/load'
import youtubeVideo from './youtube/video'

export default combineReducers({
  examples: combineReducers({
    count: counter,
    sum,
    images: getImages
  }),
  todos: combineReducers({
    todosList,
    todosFilter
  }),
  youtube: combineReducers({
    youtubeList,
    load: youtubeLoad,
    video: youtubeVideo
  }),
  routing
})
