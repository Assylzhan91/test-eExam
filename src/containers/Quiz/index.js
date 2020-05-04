import React, { Component } from 'react'
import ActiveQuiz from '../../components/ActiveQuiz'
import styles from "./quiz.module.scss"

class Quiz extends Component {
  state = {
    quiz: getData()
  }
  onAnswerClickHandler = (id)=>{
    console.log(id)
   
  }
  
  render() {
    return (
      <div className={`${styles.quiz} pt-5`}>
        <div className={`${styles.wrapper}`}>
          <h1>Quiz</h1>
          <ActiveQuiz
            answers={this.state.quiz[0].answers}
            question={this.state.quiz[0].question}
            onAnswerClickHandler={this.onAnswerClickHandler}
          />
        </div>
      </div>
    )
  }
}
export  default Quiz


function getData() {
 
  return [
    { question: "Question 1",
      rightAnswers: 2,
      
      answers: [
        {text: 'Answer 1', id: 1},
        {text: 'Answer 2', id: 2},
        {text: 'Answer 3', id: 3},
        {text: 'Answer 4', id: 4}
      ]
    }
  ]
}
