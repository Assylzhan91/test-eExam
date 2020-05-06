import React, { Component } from 'react'
import MenuToggle from '../../components/Navigation/MenuToggle'
import Drawer from '../../components/Navigation/Drawer'
import styles from './layout.module.scss'
import { withRouter } from 'react-router-dom'

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
    let path = this.props.location.pathname.replace(/^\//g, '')
    let clsArr = [
      styles.main
    ]
    if(path){
      clsArr.push(path)
    }
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
        
        <main className={clsArr.join(' ')}>
          <div className={styles.mainWrap}>
            {this.props.children}
          </div>
        </main>
      </div>
    )
  }
}
export  default withRouter(Layout) 
