import React from 'react';
import {render} from 'react-dom';
import App from './App';
import 'normalize.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
/*
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
*/



render(
  <BrowserRouter>
    <App/>   
  </BrowserRouter>, 
document.getElementById('root'));
