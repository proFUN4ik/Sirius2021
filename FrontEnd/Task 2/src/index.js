import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';
import './globalStyle.css';
import RegPage from './regPage';
import TaskPage from './taskPage';


const Page = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={RegPage}/>
                <Route path='/tasks' component={TaskPage}/>
            </Switch>
        </Router>
    )
}

ReactDOM.render(
    <Page />,
    document.getElementById('root')
)