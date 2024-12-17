import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";

// import * as actions from "../store/actions";
import * as actions from "../../store/actions";

import "./Login.scss";
import { FormattedMessage } from "react-intl";

import { handleLoginApi } from "../../services/userService";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      iShowPass: false,
    };
  }

  handleOnChangInputusername = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  handleOnChangInputpass = (event) => {
    this.setState({
      password: event.target.value,
    });
  };
  handleLogin = async () => {
    console.log(
      "username: ",
      this.state.username,
      "password: ",
      this.state.password
    );
    console.log("All state: ", this.state);

    await handleLoginApi(this.username, this.state.password);
  };

  handleShowHidepass = () => {
    this.setState({
      iShowPass: !this.state.iShowPass,
    });
  };

  render() {
    return (
      <div className="login-background">
        <div className="login-container">
          <div className="login-conten">
            <div className="col-12 text-login">Login</div>
            <div className="col-12 form-group login-input">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your Username"
                value={this.state.username}
                onChange={(event) => this.handleOnChangInputusername(event)}
              ></input>
            </div>
            <div className="col-12 form-group login-input">
              <label>Password</label>
              <div className="custom-input-password">
                <input
                  type={this.state.iShowPass ? "text" : "password"}
                  className="form-control"
                  placeholder="Enter your Password"
                  value={this.state.password}
                  onChange={(event) => this.handleOnChangInputpass(event)}
                />
                <span
                  onClick={() => {
                    this.handleShowHidepass();
                  }}
                >
                  <i
                    class={
                      this.state.iShowPass ? "far fa-eye" : "fas fa-eye-slash"
                    }
                  ></i>
                </span>
              </div>
            </div>
            <div className="col-12">
              <button
                className="btn-login"
                onClick={() => {
                  this.handleLogin();
                }}
              >
                Login
              </button>
            </div>
            <div className="col-12">
              <span className="forgot-password">Forgot your password</span>
            </div>
            <div className="col-12 text-center mt-3">
              <span className="col-12">Or login with</span>
            </div>
            <div className="col-12 social-login">
              <i className="fab fa-google google"></i>
              <i className="fab fa-facebook facebook"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    languages: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (path) => dispatch(push(path)),
    adminLoginSuccess: (adminInfo) =>
      dispatch(actions.adminLoginSuccess(adminInfo)),
    adminLoginFail: () => dispatch(actions.adminLoginFail()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
