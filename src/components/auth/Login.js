/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const {
    email, password,
  } = formData;
  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <>
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead">
        <i className="fas fa-user" />
        {' '}
Log into Your Account
      </p>
      <form className="form auth-form" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            Value={email}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            Value={password}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Dont have an account?
        {' '}
        <Link to="/register">Sign Up</Link>
      </p>
    </>
  );
};

export default Login;
