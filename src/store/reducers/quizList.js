import {
  FETCHED_QUIZES_START,
  FETCHED_QUIZES_SUCCESS,
  FETCHED_QUIZES_ERROR
} from "../actions/actionTypes"

const initialState = {
  quizList: [],
  isLoading: false
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

    default:
      return state
  }
}

