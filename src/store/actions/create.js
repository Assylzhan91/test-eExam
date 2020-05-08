import {CREATE_QUIZ_QUESTION, RESET_QUIZ_CREATION} from "./actionTypes";
import axios from "../../axios/axios";

export function createQuizHandler(item){
  return {
    type: CREATE_QUIZ_QUESTION,
    item
  }
}

export function resetQuizCreation(){
  return {
    type: RESET_QUIZ_CREATION
  }
}


export function finishCreateQuiz(){
  return async (dispatch, getState) =>{
    await axios.post('https://test-quiz-2bf28.firebaseio.com/quizes.json', getState().createReducer.quiz)
    
  }
}

