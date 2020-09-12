import React, {Component} from 'react';
import './App.css';
import Routes from './Routes';
import history from './history';
import { MDBBtn } from 'mdbreact';

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
              <div>
                <MDBBtn outline color="primary" type="submit" onClick={() => history.push("/")}>Home</MDBBtn>
                <MDBBtn outline color="primary" type="submit" onClick={() => history.push("/about")}>About Us</MDBBtn>
              </div>
             <Routes/>
            </div>
        );
    }

}

export default App;
