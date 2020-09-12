import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBBtn, MDBCol, MDBIcon } from 'mdbreact';
import './College.css';

class College extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    handleWebOpen(link) {
        window.open(link);
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
                        <MDBBtn outline onClick={() => this.handleWebOpen('https://www.careeronestop.org/toolkit/training/find-scholarships.aspx')} color="info">Scholarships</MDBBtn>
                        <MDBBtn outline onClick={() => this.handleWebOpen('https://learn.khanacademy.org/osp-landing-page/?utm_source=cbcta-osp&utm_medium=cb418-cb&utm_campaign=osp-lp')} color="info">SAT Prep</MDBBtn>
                        <MDBBtn outline onClick={() => this.handleWebOpen('https://www.mymajors.com/find-a-college/')} color="info">Find my College</MDBBtn>
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
