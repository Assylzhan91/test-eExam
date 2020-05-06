import React, { Component } from 'react'
import styles from "./auth.module.sass"
import Button from "../../components/UI/Button"
import Input from "../../components/UI/Input"

function validateEmail(email) {
  let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  return pattern.test(String(email).toLowerCase())  
}

class Auth extends Component {
  state = {
    formControls: {
      email: {
        value:'',
        type: 'email',
        label: 'Email',
        errorMessage: 'Please, enter correct email',
        valid: false,
        touched: false,
        validation:{
          require: true,
          email: true
        }
      },
      password: {
        value:'',
        type: 'password',
        label: 'Password',
        errorMessage: 'Please, enter your  correct password',
        valid: false,
        touched: false,
        validation:{
          require: true,
          minLength: 6
        }
      }
    }
  }
  
  validateControl(value, validation ){
    if(!validation){
      return true
    }
    let  isValid = true
    
    if(validation.required){
      isValid = value.trim() !== '' && isValid
    }
    
    if(validation.email){
      isValid = validateEmail(value)
    }
    
    if(validation.minLength){ 
      isValid = value.length >= validation.minLength && isValid
    }
    return  isValid
  }
  
  onChange = (e, controlName)=>{
    let formControls = {...this.state.formControls}
    let control = {...formControls[controlName]}
    control.value = e.target.value
    control.touched = true
    control.valid = this.validateControl(control.value, control.validation)
    formControls[controlName] = control
    this.setState({
      formControls
    })
  }
  onSignInHandler=()=>{
    
  }

  onLoginHandler=()=>{
    
  }

  SubmitHandler=(e)=>{
    e.preventDefault()
  }
  
  renderFormControls = ()=>{
    let formControls = this.state.formControls

    return  Object.keys(formControls).map((control, idx)=>{
      let inputControl =  formControls[control]
      return (
        <Input
          key           ={idx}
          value         ={inputControl.value}
          type          ={inputControl.type}
          valid         ={inputControl.valid}
          touched       ={inputControl.touched}
          label         ={inputControl.label}
          shouldValidate={!!inputControl.validation}
          errorMessage  ={inputControl.errorMessage}
          onChange      ={e => this.onChange(e, control)}
        /> 
      )
    })

  }
  
  render() {

    
    return (
      <div className={styles.auth}>
        <h1>Auth</h1>
        <form action='' className={styles.form} onSubmit={this.SubmitHandler}>
          {
            this.renderFormControls()
          }
          
          <Button
            onClick={this.onSignInHandler}
          >Sign in</Button>
          
          <Button
            onClick={this.onLoginHandler}
          >
            Register
          </Button>
        </form>
      </div>
    )
  }
}

export  default Auth
