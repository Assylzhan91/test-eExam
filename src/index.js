import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import rootReducer from './store/reducers';
import App from './App';
import 'normalize.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

import { Provider } from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';

const composeEnhancers =
  typeof window === 'object' 
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) 
      : compose;


const store = createStore(rootReducer, 
  composeEnhancers(applyMiddleware(thunk))
)


render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>  
  </Provider>, 
document.getElementById('root'));


//For commit 
