import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import "./accountstyle.css";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

const Login = () => {
  const [show, setShow] = useState(false);

  if (show) {
    return (
      <div>
        <div id="dangeraler">
          <Fade top>
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
              <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
              <p>
                There is problem with login you can create a new account when
                you click on (create an account) in down or try again
              </p>
            </Alert>
          </Fade>
        </div>
        <Login />
      </div>
    );
  }
  return (
    <div
      id="loginpageidetindspo"
      className="text-light"
      style={{ height: "80vh" }}
    >
      <h2
        style={{
          width: "90%",
          color: "#f7f7f79a",
          paddingTop: "50px",
          margin: "auto",
        }}
      >
        Hello!<br></br>
        Please log in or create an account to use the features of this app
      </h2>

      <div id="inputsforloginall">
        <form>
          <p>Email</p>
          <input id="inputslogin" type="Email" />
          <p>Password</p>
          <input id="inputslogin" type="password" />
        </form>
        <Button id="buttonlogin" variant="danger" onClick={() => setShow(true)}>
          Log in
        </Button>
        <div id="submitbuttonsandcreatenew">
          <p>
            or{" "}
            <Link to="/Create" style={{ color: "#F33F3F" }}>
              create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
