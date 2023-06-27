import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import cookie from 'cookie';
import { TextField, Button, Container } from "@mui/material";

const Login = (props) => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const login = (e) => {
    e.preventDefault();
    document.cookie = cookie.serialize('loggedIn', 'true', { maxAge:180 });
    props.setLoggin(true)
    props.updateUser(state.username)
    localStorage.setItem("isLoggedIn", true)
    navigate("/dashboard");
  };

  return (
    <div className="App">
      <Container maxWidth="lg">
        <form className="login-form" onSubmit={login}>
          <TextField
            required
            onChange={handleTextChange}
            value={state.username}
            name="username"
            label="Username"
            type="text"
            variant="standard"
          />
          <TextField
            required
            onChange={handleTextChange}
            value={state.password}
            name="password"
            label="Password"
            type="password"
            variant="standard"
          />
          <Button
            sx={{ backgroundColor: "#E0E1E1", color: 'black', fontWeight: 'bold' }}
            type="submit"
            className="login-button"
            variant="contained"
          >
            Login
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default Login;