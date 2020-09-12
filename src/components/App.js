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
              <div>
<<<<<<< HEAD
                <MDBBtn outline color="primary" type="submit"  onClick={() => history.push("/college")}>College</MDBBtn>
                <MDBBtn outline color="primary" type="submit"  onClick={() => history.push("/alternative-careers")}>Alternative</MDBBtn>
                <MDBBtn outline color="primary" type="submit" onClick={() => history.push("/self-education")}>Self Education</MDBBtn>
=======
                <MDBBtn outline color="primary" type="submit" onClick={() => history.push("/")}>Home</MDBBtn>
>>>>>>> 6e5806f797e54c165fff4653c4c20a670f60cd2f
                <MDBBtn outline color="primary" type="submit" onClick={() => history.push("/about")}>About Us</MDBBtn>
              </div>
             <Routes/>
            </div>
        );
    }

}

export default App;
