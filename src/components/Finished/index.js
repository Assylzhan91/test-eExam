import React from 'react'
import styles from "./finished.module.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faTimes} from "@fortawesome/free-solid-svg-icons"
import {faCheck} from "@fortawesome/free-solid-svg-icons"

const Finished = props => {
  return (
    <div className={styles.finished}>
      <ul>
        <li className={styles.item}>
          <strong>1. </strong>
          Question
          <FontAwesomeIcon icon={faTimes} className="success"/>
        </li>
        
        <li className={styles.item}>
          <strong>2. </strong>
          Question
          <FontAwesomeIcon icon={faCheck}  className="error"/>
        </li>
      </ul>

      <p>That's right answers 4 of 10</p>
      <div>

      </div>
    </div>
  )
}

export default Finished
