import React, {Component} from 'react';
import './App.css';
import Routes from './Routes';
import history from './history';
import { Button } from 'react-bootstrap';

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
                <Button type="submit" variant="outline-primary" onClick={() => history.push("/")}>Home</Button>
                <Button type="submit" variant="outline-primary" onClick={() => history.push("/college")}>College</Button>
                <Button type="submit" variant="outline-primary" onClick={() => history.push("/alternative-careers")}>Alternative</Button>
                <Button type="submit" variant="outline-primary" onClick={() => history.push("/self-education")}>Self Education</Button>
              </div>
             <Routes/>
            </div>
        );
    }

}

export default App;
