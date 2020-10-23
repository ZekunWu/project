import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import './index.css';
import Home from './containers/Home/Loadable';
import Login from './containers/Login/Loadable';
import Info from './containers/Info/Loadable';

ReactDOM.render(
    <Router>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/info' component={Info} />
    </Router>, document.getElementById('root'));

