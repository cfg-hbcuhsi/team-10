import React, {Component} from 'react';
import './App.css';
import Routes from './Routes';
import history from './history';
import { MDBBtn } from 'mdbreact';
import NavBar from './NavBar';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
      // Call any API here
    }
    render() {
        return (
            <div>
              <NavBar/>
              <Routes/>
            </div>
        );
    }

}

export default App;
