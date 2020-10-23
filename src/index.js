import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import './index.css';
import Home from './containers/Home/Loadable';
import Login from './containers/login/Loadable';
import Info from './containers/info/Info';
import Detail from './containers/detail/Detail';
import History from './containers/history/History';
import Test from './containers/test/index';

ReactDOM.render(
    <Router>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/info' component={Info} />
        <Route exact path='/detail' component={Detail} />
        <Route exact path='/history' component={History} />
        <Route exact path='/test' component={Test} />
    </Router>, document.getElementById('root'));

