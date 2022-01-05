import React, { Component } from "react";

const Input = ({ type, placeholder, name, value, errors, onChange }) => {
  return (
    <div className="form-group">
      <input
        value={value}
        placeholder={placeholder}
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