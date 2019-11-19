import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js';
import './style/style.css'
import 'font-awesome/css/font-awesome.min.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";

import './scripts/main'

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));