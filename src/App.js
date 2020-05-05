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
        <Route path="/auth" component={Auth}/>
        <Route path="/quiz-creator" component={QuizCreator}/>
        <Route path="/quiz/:id" component={Quiz}/>
        <Route path="/" component={QuizList}/>
      </Switch>
    </Layout>
  )
}

export default App
