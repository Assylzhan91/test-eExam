import React, { Component } from 'react'
import ActiveQuiz from '../../components/ActiveQuiz'
import Finished from '../../components/Finished'
import styles from "./quiz.module.scss"

class Quiz extends Component {
  state = {
    quiz: getData(),
    activeQuestion: 0,
    answerState: null,
    isFnished: false,
    results: {}
  }
  onAnswerClickHandler = (id)=>{
    let question = this.state.quiz[this.state.activeQuestion]
    let results = this.state.results
    let success = 'success'
    let error = 'error'
    
    if(this.state.answerState){
      const key = Object.keys(this.state.answerState)[0]
      if(this.state.answerState[key]=== success){
        return 
      }
    }
  
    if(id === question.rightAnswers ){
      if(!results[question.id]){
        console.log(!results[question.id])
        results[question.id] = success
      }
      this.setState({
        answerState: {[id]: success},
        results
      })
      
       let timer = window.setTimeout(()=>{
         if(this.isFinishedQuiz()){
           this.setState({
             isFnished: true
           })
         }else{
           this.setState({
             activeQuestion: this.state.activeQuestion + 1,
             answerState: null
           })
         }
         window.clearTimeout(timer)
       }, 10)
    }else{
      results[question.id] = error 
      this.setState({
        answerState: {[id]: error},
        results
      })
    }
   
  }
  
  
  onRetryHandler = ()=>{
    this.setState({
      isFnished: false,
      activeQuestion: 0,
      results: {},
      answerState: null
    })
  }
  
  isFinishedQuiz = ()=>{
    return this.state.activeQuestion + 1 === this.state.quiz.length
  }
  render() {
    return (
      <div className={`${styles.quiz} pt-5`}>
        <div className={`${styles.wrapper}`}>
          <h1>Quiz</h1>
          {
            this.state.isFnished 
              ? <Finished
                  results={this.state.results}
                  quiz={this.state.quiz}
                  onRetry ={this.onRetryHandler}
                />
              : <ActiveQuiz
                  answers={this.state.quiz[this.state.activeQuestion].answers}
                  question={this.state.quiz[this.state.activeQuestion].question}
                  onAnswerClickHandler={this.onAnswerClickHandler}
                  quizLength={this.state.quiz.length}
                  answerNumber={this.state.activeQuestion + 1}
                  state={this.state.answerState}
                />
              
          }
        </div>
      </div>
    )
  }
}
export  default Quiz


function getData() {
 
  return [
    { 
      id: 1,
      question: "1 Question",
      rightAnswers: 2,
      answers: [
        {text: '1 Answer 1', id: 1},
        {text: '1 Answer 2', id: 2},
        {text: '1 Answer 3', id: 3},
        {text: '1 Answer 4', id: 4}
      ]
    },
    
    { 
      id: 2,
      question: "2 Question",
      rightAnswers: 3,
      answers: [
        {text: '2 Answer 1', id: 1},
        {text: '2 Answer 2', id: 2},
        {text: '2 Answer 3', id: 3},
        {text: '2 Answer 4', id: 4}
      ]
    }
  ]
}
