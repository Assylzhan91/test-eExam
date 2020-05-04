import React, { Component } from 'react'
import Quiz from '../../containers/Quiz'
import styles from './layout.module.scss'

class Layout extends Component {

  render() {
    return (
      <div className={styles.layout}>
        <main className={styles.main}>
          <Quiz/>
        </main>
      </div>
    )
  }
}
export  default Layout
