import axiosQuiz from "../../axios/axios";
import {
  FETCHED_QUIZES_START,
  FETCHED_QUIZES_SUCCESS,
  FETCHED_QUIZES_ERROR,
  FETCHED_QUIZ_SUCCESS,
  QUIZ_SET_STATE,
  FINISHED_QUIZ,
  SWITCH_NEXT_TO_QUIZ,
  RETRY_QUIZ_HANDLER
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


function quizSetState(answerState, results) {
  return {
    type: QUIZ_SET_STATE,
    answerState,
    results
  }
}

function finishedQuiz() {
  return{
    type: FINISHED_QUIZ
  }
}
function switchNextToQuiz(activeQuestion) {
  return{
    type: SWITCH_NEXT_TO_QUIZ,
    activeQuestion,
  }
}


export function onAnswerClickHandler(id) {
  return (dispatch, getState) =>{
    
    let state = getState().quizListReducer
    
    let question = state.quiz[state.activeQuestion]
    let results = state.results
    let success = 'success'
    let error = 'error'
    

    if(state.answerState){
      const key = Object.keys(state.answerState)[0]
      if(state.answerState[key]=== success){
        return
      }
    }

    if(id === question.rightAnswersId ){
      if(!results[question.id]){
        results[question.id] = success
      }
      dispatch(quizSetState({[id]: success}, results))
      
      let timer = window.setTimeout(()=>{
        if(isFinishedQuiz(state)){
          dispatch(finishedQuiz())
        }else{
          
          dispatch(switchNextToQuiz(state.activeQuestion))
        
        }
        window.clearTimeout(timer)
      }, 1000)
    }

    else{
      results[question.id] = error
      
      dispatch(quizSetState({[id]: error}, results))
    }
  }
}

export function onRetryHandler(){
  return {
    type: RETRY_QUIZ_HANDLER
  }
}


function isFinishedQuiz (state){
  return state.activeQuestion + 1 === state.quiz.length
}

  

