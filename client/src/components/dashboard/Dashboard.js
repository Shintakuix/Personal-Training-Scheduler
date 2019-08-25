import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { loadProfile } from "../../actions/profileActions";
import splashPic from "../../images/sched_top.png";

import regbutton from "../../images/submit.png";
import logoutbutton from "../../images/LOGOUT.png";
import profiletbutton from "../../images/UPDATEPROFILE.png";
import { Link } from "react-router-dom";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid';


import './Dashboard.css';


class Dashboard extends Component {
  state ={
    users:[],
  };

 

  componentDidMount() {
    const key= this.props.auth.user.id;

    this.props.loadProfile(key)
    
  }

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };


render() {
  const { item } = this.props.prof
    const { user } = this.props.auth;
    console.log(user)
    console.log(item.data)
return (
  <div className="bckimage4">
     <div className="row">
       <div className="col left-align">
      <img src={splashPic} alt="splashPic" />
      </div>
      <div className="col offset-s6">
             
          <input
            style={{width: "150px"}} 
            onClick={this.onLogoutClick}
            className="imagehover"
            type="image"
            src={logoutbutton}
            alt="logoutbutton"
            name="submit"
          />
      
      </div>


    </div>
    <div className= "container">
      
        <div className="row">
        <div className="col col1 s2">
          <div className="row">
          <div className="col col1 s12 regbox8 ">
          <br />
          <span className="regtext">PROFILE </span>
          <br />
          <br />
          <span className="formtext5 black-text" >NAME: {item.name}</span>
          <br />
          <span className="formtext5 black-text" >EMAIL: {item.email}</span>
          <br />
          <span className="formtext5 black-text" >AGE: {item.age}</span>
          <br />
          <span className="formtext5 black-text" >WEIGHT: {item.weight}</span>
          <br />
          <span className="formtext5 black-text" >HEIGHT: {item.height}</span>
          <br />
          <span className="formtext5 black-text" >NEXT SESSIONS:</span>
          <br />
          <br />
          <br />

        
          </div>
          </div>

          <div className="row">         
          <Link to="/profile">
            <div className="col s2 right-align">
            <input
              style={{width: "150px"}} 
           
              className="imagehover"
              type="image"
              src={profiletbutton}
              alt="profiletbutton"
              name="submit"
            />
            </div>
         </Link>
      </div>
      </div>

      <div className="col col2 s10">
        <div className="row">
        <div className="col col1 s12 regbox8 ">
        <div className="row">
          <div className="col s12 center-align">
            <br />
            <span className="regtext7">AVAILABLE SESSIONS THIS WEEK</span>
          </div>
        </div>

        <div className="row">
        <div className="col s1">
          </div>
          <div className="col s2 center-align">
          <span className="regtext8">MONDAY</span>
          </div>
          <div className="col s2 center-align">
          <span className="regtext8">TUESDAY</span>
          </div>
          <div className="col s2 center-align">
          <span className="regtext8">WEDNESDAY</span>
          </div>
          <div className="col s2 center-align">
          <span className="regtext8">THUSDAY</span>
          </div>
          <div className="col s2 center-align">
          <span className="regtext8">FRIDAY</span>
          </div>
        </div>

        <div className="row">
        <div className="col s1">
          </div>
          <div className="col s2 center-align">
            
            <div className="square">
            <span className="regtext8">10 AM</span>
            </div>
          </div>
          <div className="col s2 center-align">
           
            <div className="square">
            <span className="regtext8">10 AM</span>
            </div>
          </div>
          <div className="col s2 center-align">
        
            <div className="square">
            <span className="regtext8">10 AM</span>
            </div>
          </div>
          <div className="col s2 center-align">
       
            <div className="square">
            <span className="regtext8">10 AM</span>
            </div>
          </div>
          <div className="col s2 center-align">
    
            <div className="square">
            <span className="regtext8">10 AM</span>
            </div>
          </div>
        </div>

        <div className="row">
        <div className="col s1">
          </div>
          <div className="col s2 center-align">
            
            <div className="square">
            <span className="regtext8">11 AM</span>
            </div>
          </div>
          <div className="col s2 center-align">
           
            <div className="square">
            <span className="regtext8">11 AM</span>
            </div>
          </div>
          <div className="col s2 center-align">
        
            <div className="square">
            <span className="regtext8">11 AM</span>
            </div>
          </div>
          <div className="col s2 center-align">
       
            <div className="square">
            <span className="regtext8">11 AM</span>
            </div>
          </div>
          <div className="col s2 center-align">
    
            <div className="square">
            <span className="regtext8">11 AM</span>
            </div>
          </div>
        </div>

        <div className="row">
        <div className="col s1">
          </div>
          <div className="col s2 center-align">
            
            <div className="square">
            <span className="regtext8">1 PM</span>
            </div>
          </div>
          <div className="col s2 center-align">
           
            <div className="square">
            <span className="regtext8">1 PM</span>
            </div>
          </div>
          <div className="col s2 center-align">
        
            <div className="square">
            <span className="regtext8">1 PM</span>
            </div>
          </div>
          <div className="col s2 center-align">
       
            <div className="square">
            <span className="regtext8">1 PM</span>
            </div>
          </div>
          <div className="col s2 center-align">
    
            <div className="square">
            <span className="regtext8">1 PM</span>
            </div>
          </div>
        </div>

        <div className="row">
        <div className="col s1">
          </div>
          <div className="col s2 center-align">
            
            <div className="square">
            <span className="regtext8">2 PM</span>
            </div>
          </div>
          <div className="col s2 center-align">
           
            <div className="square">
            <span className="regtext8">2 PM</span>
            </div>
          </div>
          <div className="col s2 center-align">
        
            <div className="square">
            <span className="regtext8">2 PM</span>
            </div>
          </div>
          <div className="col s2 center-align">
       
            <div className="square">
            <span className="regtext8">2 PM</span>
            </div>
          </div>
          <div className="col s2 center-align">
    
            <div className="square">
            <span className="regtext8">2 PM</span>
            </div>
          </div>
        </div>
        <br />
       
          


       
        </div>
        </div>

        
        
        <div className="row">
        
        
        <input
            style={{width: "150px"}} 
            onClick={this.onLogoutClick}
            className="imagehover"
            type="image"
            src={regbutton}
            alt="regbutton"
            name="submit"
           />
      </div>
      </div>
    </div>
    </div>
    </div>
     
      
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  prof: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  prof: state.prof
});
export default connect(
  mapStateToProps,
  { logoutUser, loadProfile }
)(Dashboard);