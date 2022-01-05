import { set } from "lodash";
import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/Form";

class LoginForm extends Form {
  state = {
    data: { email: "", password: "" },
    errors: {},
  };

  schema = {
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().required().min(8).label("Password"),
  };

  doSubmit = () => {
    //This is "server call"
    window.location.href = "/LendBoxPublic/#/";
  };

  handleSignUp = () =>{
    window.location.href = "/LendBoxPublic/#/Register";
  }

  render() {
    return (
      <div className="contentProfile">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("email", "Email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
        <button id="signUpBtn" className= "btn btn-info btn-lg" onClick = {this.handleSignUp}>Sign up</button>
      </div>
    );
  }
}

export default LoginForm;
