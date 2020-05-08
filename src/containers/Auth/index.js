import React, { Component } from 'react'
import axios from "axios"
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
    },
    isValidate: false
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
    
    let  isValidate = true
    
    Object.keys(formControls).forEach( name =>{
      isValidate = formControls[name].valid && isValidate
    })
    
    this.setState({
      formControls,
      isValidate
    })
  }
  
  onSignInHandler = async ()=>{
    let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='
    
    const authData = {
      email: this.state.formControls.email.value,
      password: this.state.formControls.password.value,
      returnSecureToken: true
    }

    try {
      const response = await axios.post(url + 'AIzaSyAMRSQfJKJR_pfDttEoVeZl2YtPiJnw_0o', authData)
      console.log(response.data)
    }catch (e) {
      console.log(e)
    }
  
    
  }

  onLoginHandler= async ()=>{
    let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='
    const authData = {
      email: this.state.formControls.email.value,
      password: this.state.formControls.password.value,
      returnSecureToken: true
    }

    try {
      const response = await axios.post(url + 'AIzaSyAMRSQfJKJR_pfDttEoVeZl2YtPiJnw_0o', authData)
      console.log(response.data)
    }catch (e) {
      console.log(e)
    }

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

    //A new app for redux-react
    return (
      <div className={styles.auth}>
        <h1 className="title">Auth</h1>
        <form action='' className={styles.form} onSubmit={this.SubmitHandler}>
          {
            this.renderFormControls()
          }
          
          <Button
            onClick={this.onLoginHandler}           
            disabled={!this.state.isValidate}
            type="success"
          >
            Sign in
          </Button>
          
          <Button
            onClick={this.onSignInHandler}
            disabled={!this.state.isValidate}
            type="primary"
          >
            Register
          </Button>
        </form>
      </div>
    )
  }
}

export  default Auth
