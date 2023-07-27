import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Button, Modal } from "react-bootstrap";
import "./header.css";
import Paination from "../../uilities/pagganation";
import ribbon2 from "../../images/ribbon2.png";
import Group64 from "../../images/Group 64.png";

const Cardsoffilms = ({ moviee, numcount, sendnum }) => {
  const [index, setindex] = useState();
  sessionStorage.setItem("index", index);
  let data;
  if (localStorage.nameoffilmlist != null) {
    data = JSON.parse(localStorage.nameoffilmlist);
  } else {
    data = [];
  }

  const [idd, setidd] = useState();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div id="popularmovsec">
      <div id="popularmovielist" className="row">
        {moviee.length >= 1 ? (
          moviee.map((item) => {
            return (
              <div
                key={item.id}
                id="center"
                className=" col-12 col-lg-3 col-md-4 col-sm-6 mb-3"
              >
                <Card
                  style={{
                    width: "10rem",
                    height: "100%",
                    marginBottom: "10px",
                    background: "#1f1f1fd2",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={"https://image.tmdb.org/t/p/w500/" + item.poster_path}
                  />
                  <Button
                    variant="none"
                    onClick={() => {
                      setidd(item.title);
                      handleShow();
                    }}
                    style={{ border: "none", padding: "0" }}
                    id="addmovieicon"
                  >
                    <img alt="sad" src={ribbon2} />
                  </Button>

                  <Card.Body style={{ textDecoration: "none",color:"white" }}>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text style={{}}>
                      Date: {item.release_date}
                      <br></br>Voting: {item.vote_average}
                      <br></br>
                      <br></br>
                      <br></br>
                      <Link to={`/movieDetails/${item.id}`}>
                        <Button
                          variant="danger"
                          style={{
                            position: "absolute",
                            bottom: "5px",
                            left: "45px",
                          }}
                          id={item.id}
                        >
                          Go To
                        </Button>
                      </Link>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            );
          })
        ) : (
          <h1 className="d-flex justify-content-center mt-5 text-danger">
            No movie
          </h1>
        )}
        <Paination numcount={numcount} sendnum={sendnum} />
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header
          id="backgroundchange"
          style={{ border: "none" }}
          closeButton
        >
          <h3 className="text-danger">Add This Movie To Watchlist</h3>
        </Modal.Header>
        <Modal.Body id="backgroundchange">
          <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
            <h6>Add movie : </h6> <h4>{idd}</h4>{" "}
          </div>
          <div>
            <h6>To watchlist:</h6> <br />
            <div id="listsofnewmovie">
              <div>
                {data.length >= 1
                  ? data.map((item, index) => {
                      return (
                        <ul
                          key={index}
                          type="none"
                          style={{
                            position: "relative",
                            top: "60px",
                            marginLeft: "-36px",
                            color: "white",
                          }}
                        >
                          <Link
                            to={`/detailsaboutCreateingwatchlist/${item[0].title}`}
                            style={{ textDecoration: "none", color: "white" }}
                            onClick={() => setindex(index)}
                          >
                            <li
                              id="listsofmovies"
                              style={{ paddingBottom: "15px" }}
                            >
                              <img alt="ds" src={Group64} />
                              <p>{item[0].title}</p>
                            </li>
                          </Link>
                        </ul>
                      );
                    })
                  : null}
              </div>
            </div>
            <Link to="/Createwatchlist" style={{ border: "none" }}>
              <Button variant="danger" className="text-dark">
                + New watchlist
              </Button>
            </Link>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Cardsoffilms;
