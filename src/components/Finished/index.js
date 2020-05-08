import React from 'react'
import {Link} from 'react-router-dom'
import styles from "./finished.module.scss"
import Button from "../UI/Button"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faTimes} from "@fortawesome/free-solid-svg-icons"
import {faCheck} from "@fortawesome/free-solid-svg-icons"

const Finished = ({quiz, results, onRetry}) => {
  let successCount = Object.keys(results).reduce(((total, key)=>{
   
    if(results[key] === 'success'){
      total++
    }
    return total
  }), 0)
  
  return (
    <div className={styles.finished}>
      <ul>
        {
          quiz.map((quizItem, index)=>{
            let cls = [results[quizItem.id] === 'error' ? 'error' : 'success']
            
            return(
              <li key={index} className={styles.item}>
                <strong>{index + 1 }. </strong>
                {quizItem.question}
                <FontAwesomeIcon 
                  icon={results[quizItem.id] === 'error' ? faTimes : faCheck }
                  className={cls.join('')}
                />
              </li>
            ) 
          })
        }
      </ul>

      <p>That's right answers {successCount} of {quiz.length}</p>
      <div>
        <Button onClick={onRetry} type="primary">Try again</Button>
        
        <Link to="/">
          <Button type="success">Go Back to ListQuiz</Button>  
        </Link>
        
      </div>
    </div>
  )
}

export default Finished
