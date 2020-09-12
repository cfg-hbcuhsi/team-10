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
                <MDBCardImage className="img-fluid" src="https://www.slashgear.com/wp-content/uploads/2020/04/coursera_main.jpg" waves />
                  <MDBCardBody>
                    <MDBCardTitle>Coursera</MDBCardTitle>
                    <MDBCardText>
                      Earn certificates, or even degrees through self-paced courses here on Coursera!
                    </MDBCardText>
                    <MDBBtn href="https://www.coursera.org/">Show me more!</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="widthLim" style={{ height: "80vh" }}>
                <MDBCardImage className="img-fluid" src="https://about.udemy.com/wp-content/uploads/2016/07/about-default.png" waves />
                  <MDBCardBody>
                    <MDBCardTitle>Udemy</MDBCardTitle>
                    <MDBCardText>
                      A lot like Coursera, but with frequent deals. Many classes wind up on heavy discounts here on Udemy.
                    </MDBCardText>
                    <MDBBtn href="https://www.udemy.com/">Show me more!</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="widthLim" style={{ height: "80vh" }}>
                <MDBCardImage className="img-fluid" src="https://news.harvard.edu/wp-content/uploads/2012/05/edx_logo_col_rgb_final.jpg" waves />
                  <MDBCardBody>
                    <MDBCardTitle>MIT edx</MDBCardTitle>
                    <MDBCardText>
                    Take self-paced, online courses in various field from the prestigious MIT and Harvard!
                    </MDBCardText>
                    <MDBBtn href="https://www.edx.org/school/mitx">Show me more!</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            </MDBContainer>
        )
    }
}

export default SelfEducation;