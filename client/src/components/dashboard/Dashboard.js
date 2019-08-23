import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import regbutton from "../../images/submit.png";
import logoutbutton from "../../images/LOGOUT.png";
import { Link } from "react-router-dom";

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
      <div className="container">
        <br />
        <br />
        <br />

        <div className="row">
        <div className="col s12 regbox">
          <br />
          <div className="col s12 center-align">
          
          <span className="regtext">WELCOME, {user.name} </span>
        
            <p>
              <Link to="/profile">Profile</Link>
            </p> 
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />  
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

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
        </div>
        <div className="row">
        <div className="col s12 right-align">
          <input
            style={{width: "200px"}} 
            onClick={this.onLogoutClick}
            className="imagehover"
            type="image"
            src={logoutbutton}
            alt="logoutbutton"
            name="submit"
          />
        </div>
        </div>

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