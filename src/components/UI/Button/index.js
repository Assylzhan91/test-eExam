import React from 'react'
import styles from "./button.module.scss"

const Button = props => {
  const cls = [
    styles.button,
    props.type,
  ]
  return (
    <button
      onClick={props.onClick}
      className={cls.join(' ')}
      disabled={props.disabled}
    > 
      {props.children}
    </button>
  )
}

export default Button

