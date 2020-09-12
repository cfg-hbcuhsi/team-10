import React, { Component } from 'react';
import { MDBContainer, MDBRow } from 'mdbreact';
import './SelfEducation.css'

class SelfEducation extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <MDBContainer>
                <MDBRow><p className="self-main-text">Self Education</p></MDBRow>
            </MDBContainer>
        )
    }
}

export default SelfEducation;