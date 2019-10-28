import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import './index.css';
import Login from './login/Login';
import Info from './info/Info';
import Detail from './detail/Detail';
import History from './history/History'

ReactDOM.render(
    <Router>
        <Route exact path='/' component={Login} />
        <Route exact path='/info' component={Info} />
        <Route exact path='/detail' component={Detail} />
        <Route exact path='/history' component={History} />
    </Router>, document.getElementById('root'));

