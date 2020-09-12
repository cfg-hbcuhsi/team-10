import React from 'react';
import './App.css';
import history from './history';
import logo from '../assets/logo.png';

function NavBar(props){

    return(
        <nav class="mb-1 navbar navbar-expand-lg navbar-dark bg-dark">
            <img src={logo} alt={"logo"}/>
            <div className="navSpacing"/>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-333"
            aria-controls="navbarSupportedContent-333" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent-333">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <button className="navBtn" color="primary" type="submit" onClick={() => history.push("/")}>Home</button>
                    </li>
                    <div className="navSpacing"/>
                    <li class="nav-item">
                        <button className="navBtn" color="primary" type="submit" onClick={() => {}}>Get Mentorship</button>
                    </li>
                </ul>
            </div>
            <div>
                <button className="navBtn" color="primary" type="submit" onClick={() => history.push("/about")}>About Us</button>
            </div>
        </nav>
    )
}

export default NavBar;
