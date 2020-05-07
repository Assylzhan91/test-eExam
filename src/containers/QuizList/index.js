import React, { Component } from 'react'
import axios from 'axios'
import styles from "./quizList.module.sass"
import {NavLink} from "react-router-dom"

class QuizList extends Component {
  
  
  componentDidMount() {
    axios.get('https://test-quiz-2bf28.firebaseio.com/quiz.json')
      .then( (resp) => {
        console.log(resp);
      })

  }

  render() {
    return (
      <div className={styles.quizList}>
          <h1>QuizList</h1>
          <ul>
            {
              [1, 2, 3, 4].map((item, index)=>{
                return (
                  <li key={index}>
                    <NavLink to={'/quiz/' + item}>
                        Test {item}
                    </NavLink>
                  </li>
                );
                
              })
            }
          </ul>
      </div>
    )
  }
}

export  default QuizList
