import React, { Component } from "react";
import { Link } from "react-router-dom";
import splashPic from "../../images/sched_top.png";

import registerimg from "../../images/REGISTER.png"
import loginimg from "../../images/LOGIN.png";
import './Landing.css';



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
          <div className="col s12 center-align ">
            <br />
            <br />
            <div className="col s4 center-align offset-s2">
              <Link
                to="/login"
              >
                <img style={{
                   width: "200px"}} 
                   className="imagehover" src={loginimg} alt="loginimg" />
              </Link>
            </div>
            <div className="col s4 center-align">
              <Link
                to="/register"
              >
                <img style={{
                   width: "200px"}} 
                   className="imagehover" src={registerimg} alt="registerimg" />
              </Link>
              <br/>
              <br/>
              <br/>
              <br/>
              
            </div>
          </div>
        </div>
      </div>
    </div>
 

    );
  }
}
export default Landing;