import React, { Component } from 'react'
import MenuToggle from '../../components/Navigation/MenuToggle'
import Drawer from '../../components/Navigation/Drawer'
import styles from './layout.module.scss'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { inOpenedAction } from '../../store/actions/actions'




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
    const {isOpened, onToggleMenuHandler} = this.props
    
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
          onToggleMenuHandler={onToggleMenuHandler}
          isOpened={isOpened}
        />
        <MenuToggle 
          onToggle={onToggleMenuHandler}
          isOpened={isOpened}          
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

const mapStateToProps = ({reducerLayout})=>{
    return {
    isOpened: reducerLayout.isOpened
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    onToggleMenuHandler: () =>dispatch(inOpenedAction())
  }  
}

export  default connect(mapStateToProps, mapDispatchToProps)(withRouter(Layout)) 
