import { combineReducers } from 'redux'
import wordsReducers from './wordsReducers'

export default combineReducers({
  words: wordsReducers,
})
