import React, { Component } from 'react'
import Quiz from '../../containers/Quiz'
import MenuToggle from '../../components/Navigation/MenuToggle'
import Drawer from '../../components/Navigation/Drawer'
import Overlay from '../../components/Navigation/Overlay'
import styles from './layout.module.scss'

class Layout extends Component {
  state = {
    isOpened: false
  }
  onToggleMenuHandler = ()=>{
    this.setState({
      isOpened: !this.state.isOpened
    })
  }
  
  render() {
   
    return (
      <div className={styles.layout}>
        
        <Drawer
          onToggleMenuHandler={this.onToggleMenuHandler}
          isOpened={this.state.isOpened}
        />
        
        <MenuToggle 
          onToggle={this.onToggleMenuHandler}
          isOpened={this.state.isOpened}          
        />
        <main className={styles.main}>
         {this.props.children}
        </main>
      </div>
    )
  }
}
export  default Layout
