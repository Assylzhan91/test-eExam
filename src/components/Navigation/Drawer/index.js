import React, { Component } from 'react'
import { NavLink} from 'react-router-dom'
import Overlay from '../Overlay'
import styles from "./drawer.module.sass"

const links = [
  {to: '/', label: 'List', exact: true},
  {to: '/auth', label: 'Auth', exact: false},
  {to: '/quiz-creator', label: 'Create a quiz', exact: false}
]

class Drawer extends Component {
  
  link = React.createRef()
  
  onClickCloseHandler = ()=>{
    const link = this.link.current
    link.classList.add(styles.close)
  }
  
  render() {
    let cls = [
      styles.drawer
    ]
    
    if(!this.props.isOpened){
      cls.push(styles.close)
    }
    
    return (
      <>
        {
          this.props.isOpened
          ? <Overlay onClickOverlay={this.props.onToggleMenuHandler}/>
          : null
        }
        
        <nav className={cls.join(' ')}
             ref={this.link}
        >
          <ul>
            {links.map((link, index)=>{

              return (
                <li key={index}>
                  <NavLink to={link.to}
                           exact={link.exact}
                           onClick={this.props.onToggleMenuHandler}>
                    {link.label}
                  </NavLink>
                </li>
              )
            })}
          </ul>
        </nav>
      </>
    )
  }
}

export  default Drawer
