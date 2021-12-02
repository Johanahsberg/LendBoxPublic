import React from "react";
import Joi from "joi-browser";
import Form from "./common/Form";
import { ref } from "yup";

class RegisterForm extends Form {
  state = {
    data: {
      name: "",
      ssn: "",
      email: "",
      phoneNumber: "",
      password: "",
      password2: "",
    },
    errors: {},
  };

  schema = {
    _id: Joi.string(),
    name: Joi.string().regex(/^[a-zA-Z-,]+(\s{0,2}[a-zA-Z-, ])*$/, "alphabetical").required().label("Name"),
    ssn: Joi.string().required().length(10).regex(/^\d+$/, "numbers").label("Social security number"),
    email: Joi.string().email()
      .required()
      .label("Email"),
    phoneNumber: Joi.string()
      .length(10)
      .regex(/^\d+$/, "numbers")
      .required()
      .label("Phone Number"),
    password: Joi.string().required().min(8).label("Password"),
    password2: Joi.string().required()
  };

  componentDidMount() {

  }


  doSubmit = () => {
    window.location.href = "/";
  };

  render() {
    return (
      <div className = "contentProfile">
        <h1>Sign up to LendBox</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Name")}
          {this.renderInput("ssn", "Social Security Number")}
          {this.renderInput("email", "Email")}
          {this.renderInput("phoneNumber", "Phone Number")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("password2", "Repeat Your Password", "password")}
          {this.renderButton("Sign up")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
