import React, { Component, Fragment } from 'react'
import styles from "./quizCreator.module.sass"
import Button from "../../components/UI/Button";
import creatControl from "../../form/formFramework";
import Input from "../../components/UI/Input";
import Select from "../../components/UI/Select";


function createOption(number){
  return creatControl(
    { id: number,
      label: `Option ${number}`,
      errorMessage: 'This option mustn\'t be empty'},
    {required: true}
  )
}


function creatFormControl(){
  return {
    question: creatControl({
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
    formControls: creatFormControl()
  }
  
  SubmitHandler=(e)=>{
    e.preventDefault()
  }
  
  addQuestionHandler = () =>{
    console.log('addQuestionHandler')
  }

  createQuizHandler = () =>{
    console.log('createQuizHandler')
  }

  onChangeHandler = (value, control)=>{
      console.log(value)
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
          <Button type="primary" onClick={this.addQuestionHandler}>
            Add a question
          </Button>
          <Button type="success" onClick={this.createQuizHandler}>
            Create a new test 
          </Button>
        </form>
      </div>
    )
  }
}

export  default QuizCreator
