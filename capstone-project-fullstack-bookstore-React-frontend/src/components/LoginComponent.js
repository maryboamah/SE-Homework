import React, { Component, useState } from "react";

import BookService from "../Services/BookService";
import { Link, useNavigate } from "react-router-dom";
const LoginComponent = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [hasLoginFailed, sethasLoginFailed] = useState(false);
  const [showSuccessMessage, setshowSuccessMessage] = useState(false);

  const handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  const loginClicked = () => {
    // if(this.state.username==='in28minutes' && this.state.password==='dummy'){
    //     AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password)
    //     this.props.history.push('/user');
    //     // this.setState({showSuccessMessage:true})
    //     // this.setState({hasLoginFailed:false})
    // }
    // else {
    //      this.setState({showSuccessMessage:false})
    //      this.setState({hasLoginFailed:true})
    // }

    BookService.executeBasicAuthenticationService(
      setUsername(username),
      setPassword(password)
    )
      .then(() => {
        BookService.registerSuccesfullLogin(
          setUsername(username),
          setPassword(password)
        );
        navigate("/members");
      })
      .catch(() => {
        setshowSuccessMessage(showSuccessMessage);
        sethasLoginFailed(hasLoginFailed);
      });
  };

  return (
    <div>
      <h1>Login</h1>
      <div className="container">
        {hasLoginFailed && (
          <div className="alert alert-warning">Invalid Credentials</div>
        )}
        {showSuccessMessage && <div>Login Sucessful</div>}
        User Name:{" "}
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        Password:{" "}
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn btn-success" onClick={(e) => loginClicked(e)}>
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginComponent;
