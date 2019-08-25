import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateProfile } from "../../actions/profileActions";
import profbutton from "../../images/submit.png";
import classnames from "classnames";

import './Profile.css';


class Profile extends Component {
  constructor() {
    super();
    this.state = {
      age: "",
      weight: "",
      height: "",
      errors: {},
      id: ""
    };

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

onPass = e => {
  this.setState({ [e.id]: this.props.auth.id})
};

onSubmit = e => {
  e.preventDefault();

const newProfile = {
  age: this.state.age,
  weight: this.state.weight,
  height: this.state.height,
  id: this.props.auth.user.id

};
this.props.updateProfile(newProfile, this.props.history);
  };



render() {
  const { errors } = this.state;
  const { user } = this.props.auth;
  console.log(user)
return (
  <div className="bckimage5">
    <div className="container">
    <br />
    <br />
    <br />

      <div className="row">
        <div className="col s6 regbox">
          <br />
          <div className="col s12">

          <span className="regtext">PROFILE </span>

          </div>
          <form noValidate onSubmit={this.onSubmit}>

            <div className="input-field col s12">
              <input
                onChange={this.onChange}
                value={this.state.age}
                error={errors.age}
                id="age"
                type="text"
                className={classnames("", {
                  invalid: errors.age
                })}
              />
              <label className="formtext white-text" htmlFor="name">AGE</label>
              <span className="red-text">{errors.age}</span>
            </div>

            <div className="input-field col s12">
              <input
                onChange={this.onChange}
                value={this.state.weight}
                error={errors.weight}
                id="weight"
                type="text"
                className={classnames("", {
                  invalid: errors.weight
                })}
              />
              <label className="formtext white-text" htmlFor="email">WEIGHT</label>
              <span className="red-text">{errors.weight}</span>
            </div>

            <div className="input-field col s12">
              <input
                onChange={this.onChange}
                value={this.state.height}
                error={errors.height}
                id="height"
                type="text"
                className={classnames("", {
                  invalid: errors.height
                })}
              />
              <label className="formtext white-text" htmlFor="password">HEIGHT</label>
              <span className="red-text">{errors.height}</span>
            </div>
            <div>
              <input
              onChange={this.onPass}
              type="hidden"
              id="id"
              value={this.state.id}
              />
            </div>

            <div className="col s12">
              <input
                  className="imagehover"
                  type="image"
                  src={profbutton}
                  alt="regbutton"
                  name="submit"
                />
                <br />
                <br />

              </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}
}

Profile.propTypes = {
  updateProfile: PropTypes.func.isRequired,

};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { updateProfile }
)(Profile);