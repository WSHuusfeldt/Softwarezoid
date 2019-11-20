import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import App from './App';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './style/style.css'
import 'font-awesome/css/font-awesome.min.css';

// Scripts
import './scripts/main'
import 'bootstrap/dist/js/bootstrap.js';

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));