import React from 'react'
import AnswersList from './AnswersList'
import styles from "./active-quiz.module.scss"

const ActiveQuiz = props => {
  
  return (
    <div className={`${styles.activeQuiz} p-3`}>
      <p className={styles.question}>
      <span>
        <strong>1. </strong>
       {props.question}
      </span>

        <small>4 of 12</small>
      </p>

      <AnswersList 
        answers={props.answers}
        onAnswerClickHandler={props.onAnswerClickHandler}
      />
    </div>

  )
}

export default ActiveQuiz
