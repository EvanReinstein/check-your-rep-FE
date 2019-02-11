import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './views/Main';

// CSS Imports
import 'bootstrap/dist/css/bootstrap.css';
import './styles/reset.css';
import './styles/main.css';

ReactDOM.render(
    <Router>
        <Main />
    </Router>,
     document.getElementById('root'));


