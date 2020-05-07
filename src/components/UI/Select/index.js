import React from 'react'
import styles from "./select.module.sass"

const Select = props => {
  const htmlFor = `${props.label}-${Math.random()}`
  return (
    <div className={styles.select}>
      <label htmlFor={htmlFor}>{props.label}</label>
      <hr/>
      <select value={props.value} 
              id={htmlFor}
              onChange={props.onChange}
      >
        {
          props.options.map((option, idx)=>{
            return (
              <option key={idx} 
                      value={option.value}
                      
              >
                {option.text}
              </option>
            )    
          })
        }
      </select>
    </div>
  )
}

export default Select

