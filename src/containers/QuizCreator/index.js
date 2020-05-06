import React, { Component } from 'react'
import styles from "./quizCreator.module.sass"
import Button from "../../components/UI/Button";

class QuizCreator extends Component {
  SubmitHandler=(e)=>{
    e.preventDefault()
  }
  
  addQuestionHandler = () =>{
    console.log('addQuestionHandler')
  }

  createQuizHandler = () =>{
    console.log('createQuizHandler')
  }
  
  
  
  render() {

    return (
      <div className={styles.quizCreator}>
        <h1>Create a quiz</h1>
        <form action="" onSubmit={this.SubmitHandler}>
          <input type="text"/>
          <hr/>
          <input type="text"/>
          <input type="text"/>
          <input type="text"/>
          <input type="text"/>
          
          <select name="" id="">
            <option disabled>Выберите героя</option>
            <option value="Чебурашка">Чебурашка</option>
            <option selected value="Крокодил Гена">Крокодил Гена</option>
            <option value="Шапокляк">Шапокляк</option>
            <option value="Крыса Лариса">Крыса Лариса</option>
          </select>
          
          <Button
            type="primary"
            onClick={this.addQuestionHandler}
          >
           Add a question
          </Button>
          
          <Button
            type="success"
            onClick={this.createQuizHandler}
          >
           Create a new test 
          </Button>
        </form>
      </div>
    )
  }
}

export  default QuizCreator
