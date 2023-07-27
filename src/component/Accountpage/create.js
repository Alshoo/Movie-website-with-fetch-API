import React, { useState } from "react";
import { Alert, Button } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import user3 from "../../images/user 3.png";
import Vector43 from "../../images/Vector43.png";

const Create = () => {
  const [img, setimg] = useState(user3);
  const choosepicturefromds = (e) => {
    let file = new FileReader();
    file.readAsDataURL(e.target.files[0]);
    file.onload = function () {
      setimg(file.result);
      localStorage.imgforstorge = file.result;
    };
  };

  const [show, setShow] = useState(false);
  const [showdone1, setShowdone1] = useState("");
  const [showdone2, setShowdone2] = useState("");
  const [showdone3, setShowdone3] = useState("");
  const showmassagedidone1 = (e) => {
    setShowdone1(e.target);
    localStorage.nameofemail = JSON.stringify(e.target.value);
  };
  const showmassagedidone2 = (e) => {
    setShowdone2(e.target);
  };
  const showmassagedidone3 = (e) => {
    setShowdone3(e.target);
  };
  if (show && showdone1 === "" && showdone2 === "" && showdone3 === "") {
    return (
      <div>
        <div id="dangeralert">
          <Fade top>
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
              <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
              <p>There is problem with login you can try again</p>
            </Alert>
          </Fade>
        </div>
        <Create />
      </div>
    );
  } else if (show && showdone1 !== "" && showdone2 !== "" && showdone3 !== "") {
    return (
      <a href="/" style={{ textDecoration: "none" }}>
        <div id="dangeraler">
          <Fade top>
            <Alert variant="success" onClose={() => setShow(false)} dismissible>
              <Alert.Heading>good work</Alert.Heading>
              <p>A new account has been created for you successfully</p>
            </Alert>
          </Fade>
        </div>
      </a>
    );
  }

  return (
    <div
      style={{ height: "80vh" }}
      id="createanewaccountidsf"
      className="text-light"
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

      <div id="choosepicturesection">
        <div>
          <img alt="sfs" id="pictureforaccount" src={img} width="70px" />
        </div>
        <div>
          <label style={{ cursor: "pointer" }} htmlFor="upload">
            <img alt="fd" src={Vector43} /> Add an avatar
          </label>
          <input type="file" id="upload" onChange={choosepicturefromds} />
        </div>
      </div>

      <div id="inputsforloginall0">
        <form>
          <p>Name *</p>
          <input id="inputslogin0" type="text" onChange={showmassagedidone1} />
          <p>Email *</p>
          <input id="inputslogin0" type="Email" onChange={showmassagedidone2} />
          <p>Password *</p>
          <input
            id="inputslogin0"
            type="password"
            onChange={showmassagedidone3}
          />
        </form>
        <Button
          id="buttonlogin0"
          variant="danger"
          onClick={() => {
            setShow(true);
          }}
        >
          Create Profile
        </Button>
        <div id="submitbuttonsandcreatenew0">
          <p>
            or{" "}
            <Link to="/Login" style={{ color: "#F33F3F" }}>
              {" "}
              log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Create;
