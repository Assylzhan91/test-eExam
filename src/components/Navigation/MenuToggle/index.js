import React from 'react'
import styles from './menuToggle.module.sass'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faTimes} from "@fortawesome/free-solid-svg-icons"
import {faBars} from "@fortawesome/free-solid-svg-icons"



const MenuToggle = props => {
  const csl = [
    styles.menuToggle
  ]
  
  let icon
  if(props.isOpened){
    csl.push('open')
    icon = faTimes
  
  }else{
    icon = faBars
  }
 

  return (
    <div>
      <FontAwesomeIcon
        icon={icon}
        className={csl.join(' ')}
        onClick={props.onToggle}
      />
    </div>
  )
}

export default MenuToggle

