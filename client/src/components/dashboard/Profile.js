import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateProfile } from "../../actions/profileActions";
import classnames from "classnames";


class Profile extends Component {
  constructor() {
    super();
    this.state = {
      age: "",
      weight: "",
      height: "",
      errors: {}
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

onSubmit = e => {
  e.preventDefault();
const newProfile = {
  age: this.state.age,
  weight: this.state.weight,
  height: this.state.height,
};
this.props.updateProfile(newProfile);
  };



render() {
  const { errors } = this.state;
return (
    <div className="container">
      <div className="row">
        <div className="col s8 offset-s2">
          <div className="col s12">
            <h4>
              <b>Profile</b>
            </h4>
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
              <label htmlFor="name">Age</label>
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
              <label htmlFor="email">Weight</label>
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
              <label htmlFor="password">Height</label>
              <span className="red-text">{errors.height}</span>
            </div>

            <div className="col s12">
              <button
                type="submit"
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Submit Profile
              </button>
            </div>
          </form>
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