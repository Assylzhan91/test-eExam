import React, { Component } from 'react'
import Spinner from '../../components/Spinner'
import styles from "./quizList.module.sass"
import {NavLink} from "react-router-dom"

import {connect} from "react-redux";
import {fetchedQuizes} from "../../store/actions/quizList";


class QuizList extends Component {
  
  componentDidMount() {
    this.props.fetchedQuizes() 
    
  }

  render() {
 
    return (
      <div className={styles.quizList}>
          <h1 className="title">QuizList</h1>
        {
          this.props.isLoading && this.props.quizList !== 0
          ? <Spinner/>
          
          : <ul>
              {
                this.props.quizList.map(item=>{
                  return (
                    <li key={item.id}>
                      <NavLink to={'/quiz/' + item.id}>
                        Test {item.name}
                      </NavLink>
                    </li>
                  );

                })
              }
            </ul>
        }  
        
          
      </div>
    )
  }
}



const mapStateToProps = ({quizListReducer})=>{
  return {
    quizList: quizListReducer.quizList,
    isLoading: quizListReducer.isLoading,
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    fetchedQuizes: () => dispatch(fetchedQuizes())
  }
}




export  default connect(mapStateToProps, mapDispatchToProps)(QuizList)
