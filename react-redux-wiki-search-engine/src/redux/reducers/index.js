import { combineReducers } from 'redux'
import wikipediaList from './wikipediaList'
import wikipediaLoad  from './wikipediaLoad'
import wikipediaLanguage from './languge'
import wikipediaTerm from './wikipediaTerm'

export default combineReducers({
    wikipediaList,
    wikipediaLoad,
    wikipediaLanguage,
    wikipediaTerm
})
