import React from 'react'
import styles from "./answerItem.module.scss"

const Answer = props => {
  let cls = [styles.answerItem]
  if(props.state){
    cls.push(props.state)  
  }
  return (
    <li className={`${cls.join(' ')} mb-3`}
        onClick={()=> props.onAnswerClickHandler(props.answer.id)}
    >
      {props.answer.text}
    </li>
  )
}


export default Answer
