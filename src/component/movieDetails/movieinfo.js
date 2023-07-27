import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./movieinfo.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Group64 from "../../images/Group 64.png";

const Movieinfo = ({ moviess }) => {
  const [moviedetailll, setmoviedetailll] = useState([]);
  const params = useParams();

  const getmoviedetais = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=aeb5c68e348c5ac8a766761c2322c952&language=en-US`
    );

    setmoviedetailll(res.data);
  };
  useEffect(() => {
    return () => {
      getmoviedetais();
    };
  }, [getmoviedetais()]);

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
    <div className="text-light mt-5 pt-5" id="movieinfo">
      <div id="filmdet">
        <div>
          <img
            alt="fdd"
            width="64%"
            src={"https://image.tmdb.org/t/p/w500/" + moviedetailll.poster_path}
          />
        </div>

        <div>
          <h1>{moviedetailll.title}</h1>
          <h3 className="mt-5 pt-5">Overview</h3>
          <p>{moviedetailll.overview}</p>
          <div id="scorenumber">
            <p>Score</p>
            <h1>{moviedetailll.vote_average}</h1>
          </div>
          <Button
            variant="dark"
            className="mx-2"
            onClick={() => {
              setidd(moviedetailll.title);
              handleShow();
            }}
          >
            Add to Watchlist
          </Button>
          <a href={moviedetailll.homepage}>
            <Button variant="danger"> Watch It</Button>
          </a>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} id="modelingeditinfdie3">
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
                        <ul key={index} type="none" id="ul22">
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

export default Movieinfo;
