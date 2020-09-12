import React from 'react';
import './About.css';
import { MDBModal, MDBModalBody, MDBModalHeader } from 'mdbreact';

function About(props) {

    const handleELPOpen = () => {
        window.open('https://eatlearnplay.org/','_blank');
    }

        return (
            <MDBModal isOpen={props.modal}>
            <MDBModalHeader toggle={props.handleClose}>
                <div className="popup-header">
                    <h1>About Us</h1>
                </div>
            </MDBModalHeader>
            <MDBModalBody>
                <p>
                    Eat. Learn. Play. seeks to unleash the potential of every child and pave the way for amazing kids and bright futures. 
                    <br/><br/>
                    The Foundation is committed to unlocking the amazing potential of every child by fighting to end childhood hunger, ensuring students have access to a quality education, and providing safe places for all children to play and be active.
                </p>
                <button type="submit" onClick={handleELPOpen} className="btn btn-info btn-block my-4 submit-button">Visit Eat Learn Play</button>
            </MDBModalBody>
        </MDBModal>
    )

}

export default About;
