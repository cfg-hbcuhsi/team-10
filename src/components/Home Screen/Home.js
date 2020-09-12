import React, { Component } from "react";
import HoverButtons from "./HoverButtons";
import '../App.css'; 
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
       <div className="App">
           <div id = "sponsor"><strong>Sponsor by:</strong></div>
           <a href="https://eatlearnplay.org/">
            <img id = "logo" src = "https://prnewswire2-a.akamaihd.net/p/1893751/sp/189375100/thumbnail/entry_id/1_gg7rrigs/def_height/720/def_width/720/version/100011/type/2/q/100" alt = "Eat.Learn.Play logo"></img>
           </a>
           <p id = "title">Look. Find. Educate.</p>
           <p class = "intro"> 
                This platform is used for students entering high school to see the different options they have after they graduate. 
                Some of the options include College, Alternative Careers, and Self Education. With this resource, students will be better suited to 
                structure a more detailed plan on what path they would want to presue after graduating from high school.
           </p>
        <HoverButtons/>
            <div class = "footer">
                <li><a target = "blank" href = "https://eatlearnplay.org/contact">Contact Us</a></li>
                <li>FAQ</li>
                <div class = "soc_media">
                    <a target = "blank" href = "https://www.facebook.com/EatLearnPlay " class="btn-floating btn-lg btn-fb" type="button" role="button"><i class="fab fa-facebook-f"></i></a>
                    <a target = "blank" href = "https://twitter.com/eatlearnplay " class="btn-floating btn-lg btn-tw" type="button" role="button"><i class="fab fa-twitter"></i></a>
                    <a target = "blank" href = "https://www.instagram.com/eatlearnplay/?hl=en "class="btn-floating btn-lg btn-ins" type="button" role="button"><i class="fab fa-instagram"></i></a>
                    <a target = "blank" href = " https://www.linkedin.com/company/eat-learn-play-foundation/"class="btn-floating btn-lg btn-li" type="button" role="button"><i class="fab fa-linkedin-in"></i></a>
                    <a target = "blank" href = "https://www.youtube.com/watch?v=PU7n6fZzqFM&ab_channel=GoldenStateWarriors "class="btn-floating btn-lg btn-yt" type="button" role="button"><i class="fab fa-youtube"></i></a>
                </div>
            </div>
        </div>
    );
  }
}

export default Home;
