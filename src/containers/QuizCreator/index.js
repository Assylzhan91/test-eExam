import React, { Component, Fragment } from 'react'
import styles from "./quizCreator.module.sass"
import Button from "../../components/UI/Button";
import creatControl from "../../form/formFramework";
import Input from "../../components/UI/Input";


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

  onchangeHandler = (value, control)=>{
      console.log(value)
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
            onChange={e => this.onchangeHandler(e.target.value, name)}
          />
          { idx === 0 ? <hr style={{background: '#f00', borderWidth: '2px'}}/> : null}
        </Fragment>
      )
    })
  }
  
  render() {

    return (
      <div className={styles.quizCreator}>
        <h1>Create a quiz</h1>
        <form action="" onSubmit={this.SubmitHandler}>
          { this.renderFormControl()}
          
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
