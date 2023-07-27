import { Button } from "react-bootstrap";
import "./header.css";
import Cardsoffilms from "./Cards";
import Checkmark from "../../images/Checkmark.png";
import ribbon from "../../images/ribbon.png";
import { useRef, useState } from "react";

const Header = ({ movies, count_of_pages, importingnum, searchopration }) => {
  const any = useRef(null);
  const any1 = useRef(null);
  const any2 = useRef(null);

  const hide = () => {
    any.current.style.display = "none";
  };
  const hide1 = () => {
    any1.current.style.display = "none";
  };
  const hide2 = () => {
    any2.current.style.display = "block";
  };
  const [search, setsearch] = useState();

  const searching = (letters) => {
    searchopration(letters);
  };
  return (
    <div id="fristheadersection" style={{ color: "white" }}>
      <br />
      <div id="masssagewelcome" className="col-12" ref={any1}>
        <h1>
          Welcome to <strong style={{ color: "#F33F3F" }}>Watchlists</strong>
        </h1>
        <p>
          Browse movies, add them to watchlists and share them with friends.
          Just click the <img alt="fdfw" src={ribbon} /> to add a movie, the
          poster to see more details or <img alt="fdfw" src={Checkmark} /> to
          mark the movie as watched.
        </p>
      </div>
      <div id="inputcenter2">
        <input
          id="searchinput2"
          placeholder="Search by title"
          onChange={(e) => {
            searching(e.target.value);
            setsearch(e.target.value);
          }}
        />
        <Button
          variant="danger"
          style={{ color: "black", fontWeight: "700", marginLeft: "3px" }}
          onClick={() => {
            if (search != null) {
              hide();
              hide1();
              hide2();
            }
          }}
        >
          Search
        </Button>
      </div>{" "}
      <br />
      <h1 ref={any}>Popular movies right now</h1>
      <h1 style={{ display: "none" }} ref={any2}>
        Search Results: {search}
      </h1>
      <Cardsoffilms
        moviee={movies}
        numcount={count_of_pages}
        sendnum={importingnum}
      />
    </div>
  );
};

export default Header;
