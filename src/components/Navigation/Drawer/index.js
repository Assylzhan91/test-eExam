import React, { Component } from 'react'
import styles from "./drawer.module.sass"

const links = [1, 2, 3]

class Drawer extends Component {

  render() {
    let cls = [
      styles.drawer,
      !this.props.isOpen ? styles.close : null
    ].join(' ')
    return (
      <nav className={cls}>
        <ul>
          {links.map((link, index)=>{
            return (
              <li key={index}>
                <a href="#">Link {link }</a>
              </li>
            )
          })}
        </ul>
      </nav>
    )
  }
}

export  default Drawer
