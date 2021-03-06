import React, { Component } from 'react'
import {HashRouter, Route,Link,Switch} from 'react-router-dom';
import About from './about';
import Main from './Main';
import Topic from './topic';
export default class Home extends Component {
    render() {
        return (
            <HashRouter>
            <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/topics">Toplic</Link></li>
            </ul>
            <hr/>
            <Switch>
        <Route path="/" component={Main}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/topic" component={Topic}></Route>
           </Switch>
            </div>
            </HashRouter>
        )
    }
}
