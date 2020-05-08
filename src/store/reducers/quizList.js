import {
  FETCHED_QUIZES_START,
  FETCHED_QUIZES_SUCCESS,
  FETCHED_QUIZES_ERROR,
  FETCHED_QUIZ_SUCCESS
} from "../actions/actionTypes"

const initialState = {
  quizList: [],
  isLoading: false,
  error: null,
  results: {},
  isFinished: false,
  activeQuestion: 0,
  answerState: null,
  quiz: null
}

export const reducerQuizList = (state = initialState, action)=>{
  switch (action.type) {
    case FETCHED_QUIZES_START:
      return {
        ...state, isLoading: true
      }
    case FETCHED_QUIZES_SUCCESS:
      return {
        ...state, 
        quizList: action.quizes,
        isLoading: false 
      }
    case FETCHED_QUIZES_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false
      }
    case FETCHED_QUIZ_SUCCESS:
      return {
        ...state,
        isLoading: false,
        quiz: action.quiz
      }

    default:
      return state
  }
}

