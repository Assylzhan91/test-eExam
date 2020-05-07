import React, { Component, Fragment } from 'react'
import styles from "./quizCreator.module.sass"
import Button from "../../components/UI/Button";
import {createControl, validate, validateForm} from "../../form/formFramework";
import Input from "../../components/UI/Input";
import Select from "../../components/UI/Select";


function createOption(number){
  return createControl(
    { id: number,
      label: `Option ${number}`,
      errorMessage: 'This option mustn\'t be empty'},
    {required: true}
  )
}


function creatFormControl(){
  return {
    question: createControl({
      label: "Enter a new question",
      errorMessage: 'The question mustn\'t be empty'
    },{required: true}),

    option1: createOption(1),
    option2: createOption(2),
    option3: createOption(3),
    option4: createOption(4)
  }
}

class QuizCreator extends Component {
  state = {
    quiz: [],
    rightAnswersId: 1,
    formControls: creatFormControl(),
    isFormValid: false
  }
  
  SubmitHandler = e =>{
    e.preventDefault()
  }
  
  addQuestionHandler = e =>{
    e.preventDefault()
    
    const quiz = this.state.quiz.concat()
    const idx = quiz.length  + 1 
    const { question, option1, option2, option3, option4}= this.state.formControls
    const quizItem = {
      question: question.value,
      id: idx,
      rightAnswersId: this.state.rightAnswersId,
      answers: [
        {text: option1.value, id: option1.id},
        {text: option2.value, id: option2.id},
        {text: option3.value, id: option3.id},
        {text: option4.value, id: option4.id},
      ]
    }
    
    quiz.push(quizItem)
    this.setState({
      quiz,
      rightAnswersId: 1,
      formControls: creatFormControl(),
      isFormValid: false
    })
  }

  createQuizHandler = e =>{
    e.preventDefault()
    
  }

  onChangeHandler = (value, controlName)=>{
    const formControls = { ...this.state.formControls }
    const control = { ...formControls[controlName] }

    control.touched = true
    control.value = value
    control.valid = validate(control.value, control.validation)

    formControls[controlName] = control

    this.setState({
      formControls,
      isFormValid: validateForm(formControls)
    })

    
  } 
  
  onChangeSelectHandler = e =>{
    this.setState({
      rightAnswersId: parseInt(e.target.value) 
    })
    
  }
  
  renderFormControl () {
    return  Object.keys(this.state.formControls).map((name, idx)=>{
    
      let control = this.state.formControls[name]
      return(
        <Fragment  key={name + idx}>
          <Input
            label={control.label}
            value={control.value}
            valid={control.valid}
            shouldValidate={!!control.validation}
            touched={control.touched}
            errorMessage={control.errorMessage}
            onChange={e => this.onChangeHandler(e.target.value, name)}
          />
          { idx === 0 ? <hr style={{background: '#f00', borderWidth: '2px'}}/> : null}
        </Fragment>
      )
    })
  }
  
  render() {
    const select = <Select
      label='Pick up the correct answer'
      value={this.state.rightAnswersId}
      onChange={this.onChangeSelectHandler}
      options= {[
        {text: "Text 1", value: 1},
        {text: "Text 2", value: 2},
        {text: "Text 3", value: 3},
        {text: "Text 4", value: 4}
      ]}
    />
    return (
      <div className={styles.quizCreator}>
        <h1>Create a quiz</h1>
        <form action="" onSubmit={this.SubmitHandler}>
          { this.renderFormControl()}
          
          
          {select}
          <Button type="primary" 
                  onClick={this.addQuestionHandler}
                  disabled={!this.state.isFormValid}
          >
            Add a question
          </Button>
          <Button type="success" 
                  onClick={this.createQuizHandler}
                  disabled={this.state.quiz.length === 0}
          >
            Create a new test 
          </Button>
        </form>
      </div>
    )
  }
}

export  default QuizCreator
