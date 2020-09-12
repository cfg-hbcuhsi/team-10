import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBBtn, MDBCol, MDBIcon } from 'mdbreact';
import './College.css';

class College extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <MDBContainer className="container-spacing">
                <MDBRow>
                <MDBCol md="6">
                    <MDBRow>
                    <p className="interest">Select Your Interests</p>
                    <div style={{paddingRight:10}}/>
                    <button className="filter-btn"><MDBIcon size="lg" icon="filter"/></button>
                    </MDBRow>
                </MDBCol>
                <MDBCol>
                    <MDBRow>
                        <MDBBtn outline color="info">Scholarships</MDBBtn>
                        <MDBBtn outline color="info">SAT Prep</MDBBtn>
                        <MDBBtn outline color="info">Find my College</MDBBtn>
                    </MDBRow>
                </MDBCol>
                </MDBRow>
                <MDBRow>
                    {/* Filter options */}
                </MDBRow>
                <MDBRow>
                    {/* Cards with info */}
                </MDBRow>
            </MDBContainer>
        )
    }
}

export default College;
