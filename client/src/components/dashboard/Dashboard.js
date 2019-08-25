import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { loadProfile } from "../../actions/profileActions";

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
    <div className= "container">
      <div className="row right-align">
      <br />
      <div className="col s2 offset-s8">
      </div>
      
          
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
      
        <div className="row">
        <div className="col col1 s4">
          <div className="row">
          <div className="col col1 s12 regbox8 ">
          <br />
          <span className="regtext">PROFILE </span>
          <br />
          <br />
          <span className="formtext black-text" >NAME: {item.name}</span>
          <br />
          <span className="formtext black-text" >EMAIL: {item.email}</span>
          <br />
          <span className="formtext black-text" >AGE: {item.age}</span>
          <br />
          <span className="formtext black-text" >WEIGHT: {item.weight}</span>
          <br />
          <span className="formtext black-text" >HEIGHT: {item.height}</span>
          <br />
          <span className="formtext black-text" >NEXT SESSIONS:</span>
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

      <div className="col col2 s8">
        <div className="row">
        <div className="col col1 s12 regbox8 ">
        <br />
       
          <FullCalendar defaultView="dayGridWeek" plugins={[ dayGridPlugin ]} />


       
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