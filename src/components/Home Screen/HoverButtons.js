import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBView, MDBMask } from "mdbreact";
import history from '../history';

class HoverButtons extends React.Component {
  render() {
    return (
      <MDBContainer className="mt-5">
        <MDBRow>
          <MDBCol md="4">
            <MDBView hover onClick={() => history.push("/college")}>
              <img src={require('../../assets/college.jpg')} 
              className="img-fluid" 
              alt=""  
               />
              <MDBMask className="flex-center" overlay="red-strong">
                <h1 className="white-text">College</h1>
              </MDBMask>
            </MDBView>
          </MDBCol>
          <MDBCol md="4">
            <MDBView hover onClick={() => history.push("/alternative-careers")}>
              <img src={require('../../assets/careers.jpg')} className="img-fluid" alt="" />
              <MDBMask className="flex-center" overlay="blue-strong">
                <h1 className="white-text">Alternative Careers</h1>
              </MDBMask>
            </MDBView>
          </MDBCol>
          <MDBCol md="4">
            <MDBView hover onClick={() => history.push("/self-education")}>
              <img
                src={require('../../assets/self_education.jpg')}
                className="img-fluid"
                alt=""
                
              />
              <MDBMask className="flex-center" overlay="yellow-strong">
                <h1 className="white-text">Self Education</h1>
              </MDBMask>
            </MDBView>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}
export default HoverButtons;
