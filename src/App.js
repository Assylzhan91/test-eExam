import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Layout from './hoc/Layout/Layout'
import Quiz from './containers/Quiz'
import QuizList from './containers/QuizList'
import Auth from './containers/Auth'
import QuizCreator from './containers/QuizCreator'

const App = props => {
  return (
    <Layout>
      <Switch>
        <Route path="/auth" exact component={Auth}/>
        <Route path="/quiz-creator" exact component={QuizCreator}/>
        <Route path="/quiz/:id" exact component={Quiz}/>
        <Route path="/" exact component={QuizList}/>
      </Switch>
    </Layout>
  )
}

export default App
