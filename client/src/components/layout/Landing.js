import React, { Component } from "react";
import { Link } from "react-router-dom";
import splashPic from "../../images/sched_top.png";
import './Landing.css';
import registerimg from "../../images/REGISTER.png"
import loginimg from "../../images/LOGIN.png"

class Landing extends Component {
  render() {
    return (

     <div className="bckimage">
        <div className="row">
        <img src={splashPic} alt="splashPic" />
        </div>

      
      <div  className="container">
     
        <div className="row">
        <div className="col s12 center-align">
        <span className="splashtext">ARE YOU READY?</span>
        </div>
        </div>    
        <div className="row">
          <div className="col s12 center-align">
            <br />
            <div className="col s6">
              <Link
                to="/register"
              >
                <img src={registerimg} alt="registerimg" />
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
              >
                <img src={loginimg} alt="loginimg" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      </div>
 

    );
  }
}
export default Landing;