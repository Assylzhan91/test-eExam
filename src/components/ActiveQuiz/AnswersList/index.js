import React from 'react'
import styles from "./answersList.module.scss"
import AnswerItem from "./AnswerItem"

const AnswersList = props => {

  return (
    <ul className={styles.answerList}>
      {props.answers.map((answer, index) =>{
        return <AnswerItem
          answer={answer}
          key={index}
          onAnswerClickHandler={props.onAnswerClickHandler}
          state={props.state ? props.state[answer.id] : null}
        />
      
      })}
    </ul>
    
  )
}

export default AnswersList
