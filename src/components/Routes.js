import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from './history';
import Home from '../components/Home Screen/Home';
import College from '../components/College Screen/College';
import AlternativeCareers from '../components/Alternative Screen/AlternativeCareers';
import SelfEducation from '../components/Self Education Screen/SelfEducation';
import About from '../components/About/About';

export default class Routes extends Component {

    render() {
        return (
            // This component manages the paths to the different screens
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home}> 
                    </Route>
                    <Route path="/college" component={College}>
                    </Route>
                    <Route path="/alternative-careers" component={AlternativeCareers}>
                    </Route>
                    <Route path="/self-education" component={SelfEducation}>
                    </Route>
                    <Route path="/about" component={About}>
                    </Route>
                </Switch>
            </Router>
        )
    }
}