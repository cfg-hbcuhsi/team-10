import React, {Component} from 'react';

class AlternativeCareers extends Component {

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
                <p>Alternative Careers</p>
                {console.log("Loaded Alt")}
            </div>
        );
    }

}

export default AlternativeCareers;
