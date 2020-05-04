import React from 'react'
import AnswersList from './AnswersList'
import styles from "./active-quiz.module.scss"

const ActiveQuiz = props => {
  
  return (
    <div className={`${styles.activeQuiz} p-3`}>
      <p className={styles.question}>
      <span>
        <strong>{props.answerNumber}. </strong>
       {props.question}
      </span>

        <small>{props.answerNumber} of {props.quizLength}</small>
      </p>

      <AnswersList 
        answers={props.answers}
        onAnswerClickHandler={props.onAnswerClickHandler}
        state={props.state}
      />
    </div>

  )
}

export default ActiveQuiz
