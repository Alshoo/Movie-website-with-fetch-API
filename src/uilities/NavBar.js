import React, { useEffect, useRef, useState } from "react";
import "./NavBar.css";
import { Button, Collapse, Offcanvas } from "react-bootstrap";
import Home from ".././images/Home.png";
import history from ".././images/history.png";
import user1 from ".././images/user 1.png";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Showlists from "./showlists";

const NavBar = () => {
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [open, setOpen] = useState(false);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const removeaccountsign = () => {
    localStorage.removeItem("imgforstorge");
    localStorage.removeItem("nameofemail");
  };

  const any = useRef();
  const any1 = useRef();
  const styling = () => {
    if (window.location.pathname === "/") {
      any.current.style.background = "rgba(240, 248, 255, 0.198)";
    } else if (window.location.pathname === "/Historypage") {
      any1.current.style.background = "rgba(240, 248, 255, 0.198)";
    }
  };

  useEffect(() => {
    styling();
  }, []);

  return (
    <div id="frist">
      <div id="mainnav">
        <div id="hiddenfristsec">
          <a href="/" style={{ textDecoration: "none" }}>
            <h1
              style={{
                color: "#F33F3F",
                paddingTop: "20px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Watchlists
            </h1>
          </a>

          <div id="pagestrans">
            <Link
              to="/"
              style={{ display: "flex", alignItems: "center", gap: "10px" }}
              ref={any}
              onClick={() => {
                styling();
                any1.current.style.background = "none";
                any.current.style.background = "rgba(240, 248, 255, 0.198)";
              }}
            >
              <img alt="fdf" src={Home} />
              <p> Home</p>
            </Link>
            <Link
              to="/Historypage"
              style={{ display: "flex", alignItems: "center", gap: "10px" }}
              ref={any1}
              onClick={() => {
                styling();
                any.current.style.background = "none";
                any1.current.style.background = "rgba(240, 248, 255, 0.198)";
              }}
            >
              <img alt="fdf" src={history} />
              <p> History</p>
            </Link>
            <Link to="/Createwatchlist" style={{ background: "none" }}>
              <Button variant="danger">+ Create watchlist</Button>
            </Link>
          </div>

          <hr id="hrnav"></hr>
          <h3 style={{ padding: "15px 10px", position: "absolute" }}>
            My Lists
          </h3>

          <Showlists />

          <div id="loginbutton">
            <Link to="Login" style={{ textDecoration: "none" }}>
              <img
                alt="fdf"
                id="imgaccount"
                src={
                  localStorage.imgforstorge ? localStorage.imgforstorge : user1
                }
              />
              {localStorage.nameofemail ? (
                <p>{JSON.parse(localStorage.nameofemail)}</p>
              ) : (
                <p>GUEST</p>
              )}
            </Link>
            <Button
              variant="none"
              id="threepoint"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <div>.</div>
              <div>.</div>
              <div>.</div>
            </Button>
          </div>
        </div>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header id="backgroundchange" closeButton>
            <Modal.Title>
              <strong style={{ color: "red" }}>Warning</strong> Message
            </Modal.Title>
          </Modal.Header>
          <Modal.Body id="backgroundchange">
            You are sure that you want to delet your account once and for all
          </Modal.Body>
          <Modal.Footer id="backgroundchange">
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="danger" href="/" onClick={removeaccountsign}>
              Remove
            </Button>
          </Modal.Footer>
        </Modal>

        <div style={{ minHeight: "150px", textAlign: "center" }}>
          <Collapse in={open}>
            <div id="example-collapse-text">
              <Card
                style={{
                  width: "70%",
                  border: "none",
                  position: "absolute",
                  bottom: "75px",
                  left: "45px",
                }}
              >
                <Button
                  variant="danger"
                  style={{ color: "black", fontWeight: "bold" }}
                  onClick={handleShow}
                >
                  Remove Account
                </Button>
              </Card>
            </div>
          </Collapse>
        </div>
      </div>

      <div id="backblacking">
        <div onClick={handleShow2} id="toggle">
          <div></div>
          <div></div>
          <div></div>
        </div>

        <a href="/" id="scaletext" style={{ textDecoration: "none" }}>
          <h1
            style={{
              color: "#F33F3F",
              paddingTop: "20px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Watchlists
          </h1>
        </a>

        <Link to="Login" style={{ textDecoration: "none" }}>
          <img
            alt="fdf"
            id="imgaccount2"
            src={localStorage.imgforstorge ? localStorage.imgforstorge : user1}
          />
        </Link>
      </div>
      <Offcanvas
        show={show2}
        style={{
          background: "black",
          width: "90%",
          overflow: "hidden",
          position: "absolute",
        }}
        onHide={handleClose2}
      >
        <Offcanvas.Header>
          <Offcanvas.Title className="d-flex">
            <a href="/" style={{ textDecoration: "none" }}>
              <h1
                style={{
                  color: "#F33F3F",
                  paddingTop: "20px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                Watchlists
              </h1>
            </a>
          </Offcanvas.Title>
          <div variant="none" id="icon" onClick={handleClose2}>
            <i class="fa-solid fa-xmark"></i>
          </div>
        </Offcanvas.Header>
        <Offcanvas.Body className="text-center">
          <div id="pagestrans">
            <Link
              to="/"
              style={{ display: "flex", alignItems: "center", gap: "10px" }}
              ref={any}
              onClick={() => {
                styling();
                any1.current.style.background = "none";
                any.current.style.background = "rgba(240, 248, 255, 0.198)";
              }}
            >
              <img alt="fdf" src={Home} />
              <p> Home</p>
            </Link>
            <Link
              to="/Historypage"
              style={{ display: "flex", alignItems: "center", gap: "10px" }}
              ref={any1}
              onClick={() => {
                styling();
                any.current.style.background = "none";
                any1.current.style.background = "rgba(240, 248, 255, 0.198)";
              }}
            >
              <img alt="fdf" src={history} />
              <p> History</p>
            </Link>
            <Link to="/Createwatchlist" style={{ background: "none" }}>
              <Button variant="danger">+ Create watchlist</Button>
            </Link>
          </div>

          <hr id="hrnav"></hr>
          <h3 style={{ padding: "15px 10px", color: "#1f1f1f" }}>My Lists</h3>

          <Showlists id="sdsdswrw3" />

          <div id="loginbutton" className="pe-4 ">
            <Link to="Login" id="testing34" style={{ textDecoration: "none" }}>
              <img
                alt="fdf"
                id="imgaccount"
                src={
                  localStorage.imgforstorge ? localStorage.imgforstorge : user1
                }
              />
              {localStorage.nameofemail ? (
                <p>{JSON.parse(localStorage.nameofemail)}</p>
              ) : (
                <p>GUEST</p>
              )}
            </Link>
            <Button
              variant="none"
              id="threepoint"
              className="mt-2"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <div>.</div>
              <div>.</div>
              <div>.</div>
            </Button>
          </div>
          <div style={{ minHeight: "150px", textAlign: "center" }}>
            <Collapse in={open}>
              <div
                id="example-collapse-text"
                style={{
                  width: "50%",
                  margin: "auto",
                  border: "none",
                  position: "absolute",
                  bottom: "75px",
                  left: "70px",
                }}
              >
                <Card
                  id="RemoveinggAccount"
                  style={{
                    border: "none",
                  }}
                >
                  <Button
                    variant="danger"
                    style={{ color: "black", fontWeight: "bold" }}
                    onClick={handleShow}
                  >
                    Remove Account
                  </Button>
                </Card>
              </div>
            </Collapse>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default NavBar;
