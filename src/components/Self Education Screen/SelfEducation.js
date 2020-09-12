import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBRow } from 'mdbreact';
import "./SelfEducation.css";
class SelfEducation extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <MDBContainer>
              <MDBRow>
                <MDBCol>
                <MDBCard className="widthLim" style={{ height: "80vh" }}>
                <MDBCardImage className="img-fluid" src="https://comps.canstockphoto.com/military-uniform-soldier-row-pictures_csp6357868.jpg" waves />
                  <MDBCardBody>
                    <MDBCardTitle>Military</MDBCardTitle>
                    <MDBCardText>
                      There's more to the military than just combat roles. Click the button to learn more about military branches, the ASVAB, and military career paths.
                    </MDBCardText>
                    <MDBBtn href="#">Show me more!</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="widthLim" style={{ height: "80vh" }}>
                <MDBCardImage className="img-fluid" src="https://ak.picdn.net/offset/photos/577e8efcba6f6bfc1a487732/medium/offset_391828.jpg" waves />
                  <MDBCardBody>
                    <MDBCardTitle>Technical Careers</MDBCardTitle>
                    <MDBCardText>
                      Trades will always be in demand. If you like working with your hands, click the button to learn more about tradeschools, certifications, and apprenticeships
                    </MDBCardText>
                    <MDBBtn href="#">Show me more!</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="widthLim" style={{ height: "80vh" }}>
                <MDBCardImage className="img-fluid" src="https://media.gettyimages.com/photos/barista-taking-order-from-customer-cafe-picture-id1060887054?s=612x612" waves />
                  <MDBCardBody>
                    <MDBCardTitle>Entry Level Jobs</MDBCardTitle>
                    <MDBCardText>
                    Even just starting off working in retail or food can get you developing life-long skills. Click the button to learn more about local job ops, interviews, and resume tips.
                    </MDBCardText>
                    <MDBBtn href="#">Show me more!</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            </MDBContainer>
        )
    }
}

export default SelfEducation;