import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBBtn, MDBCol, MDBIcon } from 'mdbreact';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText } from 'mdbreact';
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
                    <MDBCol>
                      <MDBCard className="widthLim" style={{ height: "10vh" }}>
        
                        <MDBCardBody>
                          <MDBCardTitle>Computer Science</MDBCardTitle>
                          <MDBCardText>
                          For tech lovers. Learn what makes computers go and how they can be used to better society.
                          </MDBCardText>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                    <MDBCol>
                      <MDBCard className="widthLim" style={{ height: "50vh" }}>
      
                        <MDBCardBody>
                          <MDBCardTitle>Physics</MDBCardTitle>
                          <MDBCardText>
                          Learn the math of the world, and how you can make a living with it.
                          </MDBCardText>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                    <MDBCol>
                      <MDBCard className="widthLim" style={{ height: "50vh" }}>
      
                        <MDBCardBody>
                          <MDBCardTitle>Music Education</MDBCardTitle>
                          <MDBCardText>
                          Passionate about music? Learn to share that passion with generations of students as you prepare to be a music teacher.
                          </MDBCardText>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol>
                    <MDBCard className="widthLim" style={{ height: "50vh" }}>
      
                      <MDBCardBody>
                        <MDBCardTitle>Chemistry</MDBCardTitle>
                        <MDBCardText>
                        A field where you learn of the various types of matter, and why it matters.
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                  <MDBCol>
                  
                    <MDBCard className="widthLim" style={{ height: "50vh" }}>
                    
                      <MDBCardBody>
                        <MDBCardTitle>Liberal Arts</MDBCardTitle>
                        <MDBCardText>
                        I got nothin
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
    
                  </MDBCol>
                  <MDBCol>
                  <MDBCard className="widthLim" style={{ height: "50vh" }}>
      
                      <MDBCardBody>
                        <MDBCardTitle>English</MDBCardTitle>
                        <MDBCardText>
                        Reading, writing, and rhetoric through the ages.
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
            </MDBContainer>
        )
    }
}

export default College;
