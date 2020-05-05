import React, { Component } from 'react'
import Quiz from '../../containers/Quiz'
import MenuToggle from '../../components/Navigation/MenuToggle'
import Drawer from '../../components/Navigation/Drawer'
import Overlay from '../../components/Navigation/Overlay'
import styles from './layout.module.scss'

class Layout extends Component {
  state = {
    isOpen: false
  }
  onToggleMenuHandler = ()=>{
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  
  render() {
    return (
      <div className={styles.layout}>
        {
          this.state.isOpen
          ? <Overlay onClickOverlay={this.onToggleMenuHandler}/>        
          : null
        }

        <Drawer
          isOpen={this.state.isOpen}
        />
        
        <MenuToggle 
          onToggle={this.onToggleMenuHandler}
          isOpen={this.state.isOpen}          
        />
        <main className={styles.main}>
          <Quiz/>
        </main>
      </div>
    )
  }
}
export  default Layout
