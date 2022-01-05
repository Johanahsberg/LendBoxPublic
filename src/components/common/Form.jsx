import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./Input";
import Select from "./Select";

class Form extends React.Component {
  state = {
    data: {},
    errors: {},
  };

  validate = () => {
    const result = Joi.validate(this.state.data, this.schema, {
      abortEarly: false,
    });

    if (!result.error) return null;

    const errors = {};
    for (let item of result.error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    if (name === "password2" && value !== this.state.data.password){
      return "The passwords do not match"
    }
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
    
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });

    //If errors is truthy aka has keys aka has errors we return before calling server
    if (errors) return;
    this.doSubmit();
  };

  handleChange = ({ currentTarget }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(currentTarget);
    if (errorMessage) errors[currentTarget.name] = errorMessage;
    else delete errors[currentTarget.name];

    const data = { ...this.state.data };
    data[currentTarget.name] = currentTarget.value;
    this.setState({ data, errors });
  };

  renderButton(label) {
    return (
      <button disabled={this.validate()} className="btn btn-primary btn-lg">
        {label}
      </button>
    );
  }

  renderInput(name, placeholder, type = "text") {
    const { data, errors } = this.state;
    return (
      <Input
        type={type}
        placeholder={placeholder}
        name={name}
        value={data[name]}
        errors={errors[name]}
        onChange={this.handleChange}
      />
    );
  }
}

export default Form;
