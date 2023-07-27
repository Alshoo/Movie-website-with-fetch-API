import React, { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const Whatchlistpage = ({ movies }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let showing;
  if (localStorage.nameoffilmlist != null) {
    showing = JSON.parse(localStorage.nameoffilmlist);
  } else {
    showing = [];
  }

  const { id } = useParams();

  function deletdata(i) {
    showing.splice(i, 1);
    localStorage.nameoffilmlist = JSON.stringify(showing);
  }

  const indexid = sessionStorage.index;

  return (
    <div>
      <div id="pageofwatchlistdetails">
        {showing
          .filter((card) => card[0].title === id)
          .map((item, index) => {
            return (
              <div key={index} style={{ color: "white" }}>
                <div id="titleofmoviedetails">
                  <h1>{item[0].title}</h1>

                  <Button
                    variant="none"
                    onMouseUp={() => {
                      handleShow(true);
                    }}
                  >
                    <Link className="text-danger ">Delete Watchlist</Link>
                  </Button>
                </div>
                <br></br>
                <br />
                <div>
                  <h5>About this watchlist :-</h5>
                  <p>{item[0].describtion}</p>
                </div>
                <br />
                <br />
                <br />
                <div id="range" className="row">
                  <div id="ITEMSONLIST" className="col-4 me-1">
                    <h5>ITEMS ON LIST</h5>
                    <h1 className="text-danger">10</h1>
                  </div>
                  <div id="ITEMSONLIST" className="col-4 ms-1">
                    <h5>AVERAGE SCORE</h5>
                    <h1 className="text-danger">34</h1>
                  </div>
                </div>
                <br />
                <br />
                <div id="popularmovielist" className="row">
                  {movies.length >= 1 ? (
                    movies.map((item) => {
                      return (
                        <div
                          key={item.id}
                          className=" d-flex justify-content-center col-12 col-lg-3 col-md-4 col-sm-6 mb-3"
                        >
                          <Card
                            style={{
                              width: "12rem",
                              margin: "auto",
                              height: "100%",
                              marginBottom: "10px",
                              background: "#1f1f1fd2",
                            }}
                          >
                            <Card.Img
                              variant="top"
                              src={
                                "https://image.tmdb.org/t/p/w500/" +
                                item.poster_path
                              }
                            />

                            <Card.Body style={{ textDecoration: "none" }}>
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
                </div>
              </div>
            );
          })}
      </div>

      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header id="backgroundchange" closeButton>
            <Modal.Title>
              <strong style={{ color: "red" }}>Warning</strong> Message
            </Modal.Title>
          </Modal.Header>
          <Modal.Body id="backgroundchange">
            You are sure that you want to delet this watchlist account
          </Modal.Body>
          <Modal.Footer id="backgroundchange">
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="danger"
              href="/"
              onClick={() => deletdata(indexid)}
            >
              Remove
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default Whatchlistpage;
