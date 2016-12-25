import { combineReducers } from 'redux'
import youtubeList from './youtubeList'
import youtubeLoad from './load'
import youtubeVideo from './video'

export default combineReducers({
  youtubeList,
  youtubeLoad,
  youtubeVideo
})
