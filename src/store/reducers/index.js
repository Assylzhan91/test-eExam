import {combineReducers} from "redux"
import {layoutReducer} from "./layout"
import {quizListReducer} from "./quizList"
import {createReducer} from "./create"

export default combineReducers({
  layoutReducer,
  quizListReducer,
  createReducer
})
