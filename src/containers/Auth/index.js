import React, { Component } from 'react'
import styles from "./auth.module.sass"
import Button from "../../components/UI/Button"
import Input from "../../components/UI/Input"

class Auth extends Component {


  onSignInHandler=()=>{
    
  }

  onLoginHandler=()=>{
    
  }

  SubmitHandler=(e)=>{
    e.preventDefault()
  }
  
  render() {
    return (
      <div className={styles.auth}>
        <h1>Auth</h1>
        <form action='' className={styles.form} onSubmit={this.SubmitHandler}>
          
          <Input label='Email'
                 type='email'
          />
          <Input label='Password'
                 type='password'
          />
          
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
