import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import './index.css'
import { BrowserRouter } from 'react-router-dom';

import BookSearch from './BookSearch.js';

ReactDOM.render(
  <BrowserRouter><App /></BrowserRouter>, document.getElementById('root'))