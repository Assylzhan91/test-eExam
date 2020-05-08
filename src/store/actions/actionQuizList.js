import axiosQuiz from "../../axios/axios";
import {
  FETCHED_QUIZES_START,
  FETCHED_QUIZES_SUCCESS,
  FETCHED_QUIZES_ERROR, 
  FETCHED_QUIZ_SUCCESS
} from "./actionTypes";

export function fetchedQuizes() {
  return async dispatch =>{
    dispatch(fetchedQuizesStart())
    try {
      const response = await axiosQuiz.get('/quizes.json')
      const quizList = []
      Object.keys(response.data).forEach((item, index)=>{
        quizList.push({
          id: item,
          name: `Test №${index + 1}`
        })
      })

      dispatch(fetchedQuizesSuccess(quizList))

    }
    catch (e) {
      dispatch(fetchedQuizesError())
    }
  }
}

export function fetchedQuizById(quizId) {
  return async dispatch =>{
    dispatch(fetchedQuizesStart())
    
    try {
      const response = await axiosQuiz.get(`/quizes/${quizId}.json`)
      const quiz = response.data

      dispatch(fetchedQuizSuccess(quiz))
    
    }catch (e) {
      dispatch(fetchedQuizesError(e))
    }
  }
}



export function fetchedQuizesStart(){
  return {
    type: FETCHED_QUIZES_START
  }
}

export function fetchedQuizesSuccess(quizes){
  return {
    type: FETCHED_QUIZES_SUCCESS,
    quizes
  }
}

export function fetchedQuizSuccess(quiz){
  return {
    type: FETCHED_QUIZ_SUCCESS,
    quiz
  }
}

export function fetchedQuizesError(error){
  return {
    type: FETCHED_QUIZES_ERROR,
    error
  }
}
