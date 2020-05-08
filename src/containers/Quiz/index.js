import React, { Component } from 'react'

import ActiveQuiz from '../../components/ActiveQuiz'
import Spinner from '../../components/Spinner'
import Finished from '../../components/Finished'
import styles from "./quiz.module.scss"
import {connect} from "react-redux"
import {
  fetchedQuizById, 
  onAnswerClickHandler, 
  onRetryHandler
} from "../../store/actions/quizList"


class Quiz extends Component {

  componentDidMount() {
    this.props.fetchedQuizById(this.props.match.params.id)
  }
  
  componentWillUnmount() {
    this.props.onRetryHandler()
  }

  render() {
    return (
      <div className={`${styles.quiz} pt-5`}>
        <div className={`${styles.wrapper}`}>
          <h1>Quiz</h1>
          {
            
            this.props.isLoading || !this.props.quiz
              ? <Spinner/>
              : this.props.isFinished
                  ? <Finished
                      results={this.props.results}
                      quiz={this.props.quiz}
                      onRetry ={this.props.onRetryHandler}
                  />
                  : <ActiveQuiz
                      answers={this.props.quiz[this.props.activeQuestion].answers}
                      question={this.props.quiz[this.props.activeQuestion].question}
                      onAnswerClickHandler={this.props.onAnswerClickHandler}
                      quizLength={this.props.quiz.length}
                      answerNumber={this.props.activeQuestion + 1}
                      state={this.props.answerState}
                    />
          }
          
        </div>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
    fetchedQuizById: (id) => dispatch(fetchedQuizById(id)),
    onAnswerClickHandler: (id)=> dispatch(onAnswerClickHandler(id)),
    onRetryHandler: ()=> dispatch(onRetryHandler())
  }
}

const mapStateToProps = ({quizListReducer})=>{
  return {
    results       : quizListReducer.results,
    isFinished    : quizListReducer.isFinished,
    activeQuestion: quizListReducer.activeQuestion,
    answerState   : quizListReducer.answerState,
    quiz          : quizListReducer.quiz,
    isLoading     : quizListReducer.isLoading
  }
}
  


export  default connect(mapStateToProps, mapDispatchToProps)(Quiz) 
