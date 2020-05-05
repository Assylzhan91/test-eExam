import React, {Component} from 'react'
import './App.scss'
import {Route, NavLink, Switch, Redirect} from 'react-router-dom'
import About from './About/About'
import Cars from './Cars/Cars'
import CarDetail from './CarDetail'

class App extends Component {
  state = {
    isIoggedIn: false
  }
  render() {

    return (
      <div>
        <nav className="nav">
          <ul>
            <li>
              <NavLink
                to="/"
                exact
                activeClassName={'wfm-active'}
              >Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" activeStyle={{
                color: 'blue'
              }}>About</NavLink>
            </li>
            <li>
              <NavLink to={{
                pathname: '/cars',
                search: '?a=1&b=2',
                hash: 'wfm-hash'
              }}>Cars</NavLink>
            </li>
          </ul>
        </nav>
        <div>
          <h2>Is logged {this.state.isIoggedIn.toString()}</h2>
          
          <button 
            onClick={()=>this.setState({isIoggedIn: true})}
          >
            BTN
          </button>
        </div>
        <hr/>

        <Switch>
          <Route path="/" exact render={() => <h1>Home Page</h1>} />
          {
            this.state.isIoggedIn
            ? <Route path="/about" component={About} />
            : null
          }
          
          <Route path="/cars/:id" component={CarDetail} />
          <Route path="/cars"  component={Cars} />
          <Redirect to={'/'}/>
        </Switch>
      </div>
    );
  }
}

export default App
