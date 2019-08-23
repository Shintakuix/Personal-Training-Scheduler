import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import regbutton from "../../images/submit.png";
import classnames from "classnames";

import './Register.css';


class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }

componentDidMount() {
  // If logged in and user navigates to Register page, should redirect them to dashboard
  if (this.props.auth.isAuthenticated) {
    this.props.history.push("/dashboard");
  }
}

componentWillReceiveProps(nextProps) {
  if (nextProps.errors) {
    this.setState({
      errors: nextProps.errors
    });
  }
}

onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

onSubmit = e => {
    e.preventDefault();
const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
this.props.registerUser(newUser, this.props.history);
  };

render() {
    const { errors } = this.state;
return (
  <div className="bckimage2">
      <div className="container">
        <br />
        <br />
        <br />

        <div className="row">
          <div className="col s6 regbox">
            <br />
            <div className="col s12">
     
            <span className="regtext">REGISTER</span>
           
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.name}
                  error={errors.name}
                  id="name"
                  type="text"
                  className={classnames("", {
                    invalid: errors.name
                  })}

                />
                <label className="formtext white-text" htmlFor="name">FULL NAME</label>
                <span className="red-text">{errors.name}</span>
              </div>
              <div className="input-field col s12 formtext">
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className={classnames("", {
                    invalid: errors.email
                  })}
                />
                <label className="formtext white-text" htmlFor="email">EMAIL</label>
                <span className="red-text">{errors.email}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password
                  })}
                />
                <label className="formtext white-text" htmlFor="password">PASSWORD</label>
                <span className="red-text">{errors.password}</span>
              </div>
              <div className="input-field col s12" >
                <input
                  onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                  id="password2"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password2
                  })}
                />
                <label className="formtext white-text" htmlFor="password2">CONFIRM PASSWORD</label>
                <span className="red-text">{errors.password2}</span>
              </div>
              <div className="col s12">
                <input
                  className="imagehover"
                  type="image"
                  src={regbutton}
                  alt="regbutton"
                  name="submit"
                />
                <br />
                <br />


              </div>
            </form>
          </div>
        </div>
        <p className="white-text text-darken-1">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
        <p className="white-text text-darken-1">
          Back <Link to="/">home</Link>  
        </p>
      </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));