import {combineReducers} from "redux"
import {reducerLayout} from "./storeLayout"
import {reducerQuizList} from "./quizList"

export default combineReducers({
  reducerLayout,
  reducerQuizList
})
