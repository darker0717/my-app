import React, { Component } from 'react'
import {HashRoute as Router,Router,Route,Link} from 'react-router-dom';
export default class IRoute extends Component {
    render() {
        return (
            
            <Router>
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
            </Router>    
            
        )
    }
}
