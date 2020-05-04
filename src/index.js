import React from 'react';
import {render} from 'react-dom';
import App from './App';
import 'normalize.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';



render(
 <App/>, 
document.getElementById('root'));
