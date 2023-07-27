import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Historypage.css";

const Historypage = ({ movies }) => {
  return (
    <div id="historysection" style={{ color: "white" }}>
      <div id="dflexbettwentext">
        <h1>Last movie which you watch it :- </h1>
        <Link className="text-danger">Clear history</Link>
      </div>{" "}
      <br /> <br /> <br /> <br />
      <br />
      <br />
      <div id="popularmovielist" className="row">
        {movies.length >= 1 ? (
          movies.map((item) => {
            return (
              <div
                key={item.id}
                id="center"
                className="col-12 col-lg-3 col-md-4 col-sm-6 mb-3"
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

                  <Card.Body style={{ textDecoration: "none" ,color:"white"}}>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text style={{color:"white"}}>
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
};

export default Historypage;
