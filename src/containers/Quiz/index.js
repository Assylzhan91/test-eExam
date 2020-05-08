import React, { Component } from 'react'
import axiosQuiz from '../../axios/axios'
import ActiveQuiz from '../../components/ActiveQuiz'
import Spinner from '../../components/Spinner'
import Finished from '../../components/Finished'
import styles from "./quiz.module.scss"
import {connect} from "react-redux";
import {fetchedQuizById} from "../../store/actions/actionQuizList";

class Quiz extends Component {
  state = {
    results: {},
    isFnished: false,
    activeQuestion: 0,
    answerState: null,
    quiz: [],
    isLoading: true
  }
  
  componentDidMount() {
    this.props.fetchedQuizById(this.props.match.params.id)
    console.log(this.props.quiz)
    
  /*  try {
      const response = await axiosQuiz.get(`/quizes/${this.props.match.params.id}.json`)
      const quiz = response.data

      this.setState({
        quiz,
        isLoading: false
      })

    }catch (e) {
      console.log(e)
    }*/
  }


  onAnswerClickHandler = (id)=>{
    let question = this.props.quiz[this.props.activeQuestion]
    let results = this.props.results
    let success = 'success'
    let error = 'error'
   
    if(this.props.answerState){
      const key = Object.keys(this.props.answerState)[0]
      if(this.props.answerState[key]=== success){
        return 
      }
    }
  
    if(id === question.rightAnswersId ){
      if(!results[question.id]){
        results[question.id] = success
      }
      
      this.setState({
        answerState: {[id]: success},
        results
      })
      
       let timer = window.setTimeout(()=>{
         if(this.isFinishedQuiz()){
           this.setState({
             isFnished: true
           })
         }else{
           this.setState({
             activeQuestion: this.props.activeQuestion + 1,
             answerState: null
           })
         }
         window.clearTimeout(timer)
       }, 1000)
    }
    
    else{
      results[question.id] = error 
      this.setState({
        answerState: {[id]: error},
        results
      })
    }
   
  }
  
  
  onRetryHandler = ()=>{
    this.setState({
      isFnished: false,
      activeQuestion: 0,
      results: {},
      answerState: null
    })
  }
  
  isFinishedQuiz = ()=>{
    return this.props.activeQuestion + 1 === this.props.quiz.length
  }
  
  
  render() {
    return (
      <div className={`${styles.quiz} pt-5`}>
        <div className={`${styles.wrapper}`}>
          <h1>Quiz</h1>
          {
            
            this.props.isLoading || !this.props.quiz
              ? <Spinner/>
              : this.props.isFnished
                  ? <Finished
                    results={this.props.results}
                    quiz={this.props.quiz}
                    onRetry ={this.onRetryHandler}
                  />
                  : <ActiveQuiz
                    answers={this.props.quiz[this.props.activeQuestion].answers}
                    question={this.props.quiz[this.props.activeQuestion].question}
                    onAnswerClickHandler={this.onAnswerClickHandler}
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
    fetchedQuizById: (id) => dispatch(fetchedQuizById(id))
  }
}

const mapStateToProps = ({reducerQuizList})=>{
  return {
    results       : reducerQuizList.results,
    isFinished     :reducerQuizList.isFinished,
    activeQuestion: reducerQuizList.activeQuestion,
    answerState   : reducerQuizList.answerState,
    quiz          : reducerQuizList.quiz,
    isLoading     : reducerQuizList.isLoading
  }
}
  


export  default connect(mapStateToProps,mapDispatchToProps)(Quiz) 
