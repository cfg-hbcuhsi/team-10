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

    handleWebOpen(link) {
        window.open(link);
    }

    render() {
        return (
            <MDBContainer className="container-spacing">
                <MDBRow><p className="college-main-text">College Career</p></MDBRow>
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
                        <MDBBtn outline color="danger" onClick={() => this.handleWebOpen('https://www.careeronestop.org/toolkit/training/find-scholarships.aspx')} color="info">Scholarships</MDBBtn>
                        <MDBBtn outline color="danger" onClick={() => this.handleWebOpen('https://learn.khanacademy.org/osp-landing-page/?utm_source=cbcta-osp&utm_medium=cb418-cb&utm_campaign=osp-lp')} color="info">SAT Prep</MDBBtn>
                        <MDBBtn outline color="danger" onClick={() => this.handleWebOpen('https://www.mymajors.com/find-a-college/')} color="info">Find my College</MDBBtn>
                    </MDBRow>
                </MDBCol>
                </MDBRow>
                <MDBRow>
                    {/* Add Filter options HERE */}
                </MDBRow>
                <MDBRow>
                    <MDBCol>
                      <MDBCard className="widthLim" style={{ height: "10vh" }}>
        
                        <MDBCardBody>
                          <MDBCardTitle>Computer Science</MDBCardTitle>
                          <MDBCardImage className="img-fluid" src="https://marj3.azureedge.net/wp-content/uploads/2018/08/computer-science-header.jpg" waves />
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
                          <MDBCardImage className="img-fluid" src="https://images.theconversation.com/files/191827/original/file-20171025-25516-g7rtyl.jpg?ixlib=rb-1.1.0&rect=0%2C70%2C7875%2C5667&q=45&auto=format&w=926&fit=clip" waves />
                          <MDBCardText></MDBCardText>
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
                          <MDBCardImage className="img-fluid" src="https://images2.minutemediacdn.com/image/upload/c_crop,h_1190,w_2120,x_0,y_0/f_auto,q_auto,w_1100/v1554933625/shape/mentalfloss/52912-istock-523871055.jpg" waves />
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
                        <MDBCardImage className="img-fluid" src="https://images.ctfassets.net/cnu0m8re1exe/1v6Kh7bIsgVU4PA1Qi44bb/3e8e11c131620bb0080266a01a8cf36c/shutterstock_127915121.jpg?w=650&h=433&fit=fill" waves />
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
                        <MDBCardImage className="img-fluid" src="https://oglethorpe.edu/wp-content/uploads/2017/05/cic-liberal-arts-banner.jpg" waves />
                        <MDBCardText>
                       For philosofy, literature and social sciences related fields.
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
    
                  </MDBCol>
                  <MDBCol>
                  <MDBCard className="widthLim" style={{ height: "50vh" }}>
      
                      <MDBCardBody>
                        <MDBCardTitle>English</MDBCardTitle>
                        <MDBCardImage className="img-fluid" src="https://images1.content-hcs.com/commimg/myhotcourses/blog/post/myhc_24232.jpg" waves />
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
