import React, { Component } from 'react'
import axios from 'axios'
import Spinner from '../../components/Spinner'
import styles from "./quizList.module.sass"
import {NavLink} from "react-router-dom"

class QuizList extends Component {
  
  state ={
    quizList: [],
    isLoading: true
  }
  async componentDidMount() {
    try {
      const response = await axios.get('https://test-quiz-2bf28.firebaseio.com/quizes.json')
      
      const quizList = []
      Object.keys(response.data).forEach((item, index)=>{
        quizList.push({
          id: item,
          name: `Test №${index + 1}`
        }) 
      })
      
      this.setState({
        quizList,
        isLoading: false
      })
      
    }catch (e) {
      console.log(e)
    }
  }

  render() {
    return (
      <div className={styles.quizList}>
          <h1>QuizList</h1>
        {
          this.state.isLoading
          ? <Spinner/>
          : <ul>
              {
                this.state.quizList.map(item=>{
                  return (
                    <li key={item.id}>
                      <NavLink to={'/quiz/' + item.id}>
                        Test {item.name}
                      </NavLink>
                    </li>
                  );

                })
              }
            </ul>
        }  
        
          
      </div>
    )
  }
}

export  default QuizList
