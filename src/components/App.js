import React, {Component} from 'react';
import './App.css';
import Routes from './Routes';
import history from './history';

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
                <button type="submit" onClick={() => history.push("/")}>Home</button>
                <button type="submit" onClick={() => history.push("/college")}>College</button>
                <button type="submit" onClick={() => history.push("/alternative-careers")}>Alternative</button>
                <button type="submit" onClick={() => history.push("/self-education")}>Self Education</button>
              </div>
             <Routes/>
            </div>
        );
    }

}

export default App;
