import {
  FETCHED_QUIZES_START,
  FETCHED_QUIZES_SUCCESS,
  FETCHED_QUIZES_ERROR,
  FETCHED_QUIZ_SUCCESS,
  QUIZ_SET_STATE,
  FINISHED_QUIZ, 
  SWITCH_NEXT_TO_QUIZ,
  RETRY_QUIZ_HANDLER
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
    case QUIZ_SET_STATE:
      return {
        /*answerState,  results*/
        ...state,
        answerState: action.answerState,
        results: action.results
      }
    case FINISHED_QUIZ:
      return {
        ...state,
        isFinished: true
      }
    case SWITCH_NEXT_TO_QUIZ:
      return {
        ...state,
        activeQuestion: action.activeQuestion + 1,
        answerState: null,
      }
    case RETRY_QUIZ_HANDLER:
/*
      this.setState({
        isFinished: false,
        activeQuestion: 0,
        results: {},
        answerState: null
      })*/

      return {
        ...state,
        isFinished: false,
        activeQuestion: 0,
        results: {},
        answerState: null
      }

    default:
      return state
  }
}

