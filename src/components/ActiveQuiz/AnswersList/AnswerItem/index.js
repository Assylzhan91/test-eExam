import React from 'react'
import styles from "./answerItem.module.scss"

const Answer = props => {
 
  return (
    <li className={`${styles.answerItem} mb-3`}
        onClick={()=> props.onAnswerClickHandler(props.answer.id)}
    >
      {props.answer.text}
    </li>
  )
}


export default Answer
