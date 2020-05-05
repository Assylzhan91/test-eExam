import React, { Component } from 'react'
import ActiveQuiz from '../../components/ActiveQuiz'
import Finished from '../../components/Finished'
import styles from "./quiz.module.scss"

class Quiz extends Component {
  state = {
    quiz: getData(),
    activeQuestion: 0,
    answerState: null,
    isFnished: true
  }
  onAnswerClickHandler = (id)=>{
    if(this.state.answerState){
      const key = Object.keys(this.state.answerState)[0]
      if(this.state.answerState[key]=== 'success'){
        return 
      }
    }
    let question = this.state.quiz[this.state.activeQuestion]
    if(id === question.rightAnswers ){
      this.setState({
        answerState: {[question.rightAnswers]: 'success'}
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
       }, 1000)
    }else{
      this.setState({
        answerState: {[id]: 'error'}
      })
    }
   
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
      question: "1 Question 1",
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
      question: "2 Question 2",
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
