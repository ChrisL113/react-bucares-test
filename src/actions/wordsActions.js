import Axios from 'axios'
import { CHECK_WORD, DELETE_WORD, GET_ALL_WORDS } from './api'
import { ERASE_WORD, FETCH_WORDS } from './types'

export const checkWord = wordData => dispatch => {
  return Axios.post(CHECK_WORD, wordData)
    .then(res => {
      const response = {
        success: true,
        msg: res.msg,
      }
      return response
    })
    .catch(err => {
      const response = {
        success: false,
        msg: err.msg,
      }
    })
}

export const fetchWords = () => dispatch => {
  return Axios.get(GET_ALL_WORDS)
    .then(words => {
      dispatch({ type: FETCH_WORDS, payload: words.data })
    })
    .catch(err => {
      const response = {
        success: false,
        msg: err.msg,
      }
    })
}

export const deleteWord = (url, another) => dispatch => {
  
  return Axios.delete(DELETE_WORD, { headers: {}, data: { url: url } })
    .then(res => {
      dispatch({ type: ERASE_WORD, payload: another })
      const response = {
        success: true,
        msg: res  ,
      }
      return response
    })
    .catch(err => {
      const response = {
        success: false,
        msg: err.msg,
      }
      return response
    })
}
