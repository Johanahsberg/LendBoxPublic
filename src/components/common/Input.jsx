import React, { Component } from "react";

const Input = ({ type, label, name, value, errors, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        id={name}
        name={name}
        type={type}
        className="form-control"
        onChange={onChange}
      />
      {errors && <div className="alert alert-danger">{errors}</div>}
    </div>
  );
};

export default Input;