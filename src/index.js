import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import './index.css';
import Login from './login/Login';
import Info from './info/Info';
import Detail from './detail/Detail';
import History from './history/History';
import Test from './test/index'

ReactDOM.render(
    <Router>
        <Route exact path='/' component={Login} />
        <Route exact path='/info' component={Info} />
        <Route exact path='/detail' component={Detail} />
        <Route exact path='/history' component={History} />
        <Route exact path='/test' component={Test} />
    </Router>, document.getElementById('root'));

