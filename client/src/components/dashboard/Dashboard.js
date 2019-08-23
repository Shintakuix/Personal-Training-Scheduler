import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import regbutton from "../../images/submit.png";
import logoutbutton from "../../images/LOGOUT.png";
import { Link } from "react-router-dom";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

import './Dashboard.css';

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };


render() {
    const { user } = this.props.auth;
    console.log(user)
return (
  <div className="bckimage4">
      <div className="row">
      <div className="col s8">
      </div>
      <Link to="/profile">
        <div className="col s2 right-align">
          <input
            style={{width: "150px"}} 
           
            className="imagehover"
            type="image"
            src={regbutton}
            alt="regbutton"
            name="submit"
          />
        </div>
      </Link>      
          <div className="col s2 left-align">
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
      <div className="container">
        <div className="row">
        <div className="col s12 regbox4">
          <br />
          <div className="col s12 center-align">
          <FullCalendar defaultView="dayGridWeek" plugins={[ dayGridPlugin ]} />


          </div> 
          </div>
        </div>
        <input
            style={{width: "200px"}} 
            onClick={this.onLogoutClick}
            className="imagehover"
            type="image"
            src={regbutton}
            alt="regbutton"
            name="submit"
           />
      </div>
      </div>
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);