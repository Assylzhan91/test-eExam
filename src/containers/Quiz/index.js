import React, { Component } from 'react'
import ActiveQuiz from '../../components/ActiveQuiz'
import styles from "./quiz.module.scss"

class Quiz extends Component {
  state = {
    quiz: getData(),
    activeQuestion: 0
  }
  onAnswerClickHandler = (id)=>{
   
   this.setState({
     activeQuestion: this.state.activeQuestion + 1
   })
  }
  
  render() {
    return (
      <div className={`${styles.quiz} pt-5`}>
        <div className={`${styles.wrapper}`}>
          <h1>Quiz</h1>
          <ActiveQuiz
            answers={this.state.quiz[this.state.activeQuestion].answers}
            question={this.state.quiz[this.state.activeQuestion].question}
            onAnswerClickHandler={this.onAnswerClickHandler}
            quizLength={this.state.quiz.length}
            answerNumber={this.state.activeQuestion + 1}
          />
        </div>
      </div>
    )
  }
}
export  default Quiz


function getData() {
 
  return [
    { id: 1,
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
      id: 1,
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
