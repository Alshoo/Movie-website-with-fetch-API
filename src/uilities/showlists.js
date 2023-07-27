import React, { useState } from "react";
import { Link } from "react-router-dom";
import Group64 from "../images/Group 64.png";

const Showlists = () => {
  const [index, setindex] = useState();
  sessionStorage.setItem("index", index);

  let data;
  if (localStorage.nameoffilmlist != null) {
    data = JSON.parse(localStorage.nameoffilmlist);
  } else {
    data = [];
  }
  return (
    <div>
      {data.length >= 1
        ? data.map((item, index) => {
            return (
              <ul key={index} type="none" id="ulshowlist">
                <Link
                  to={`/detailsaboutCreateingwatchlist/${item[0].title}`}
                  style={{ textDecoration: "none", color: "white" }}
                  onClick={() => setindex(index)}
                >
                  <li id="listsofmovies" style={{ paddingBottom: "15px" }}>
                    <img alt="ds" src={Group64} />
                    <p id="center22">{item[0].title}</p>
                  </li>
                </Link>
              </ul>
            );
          })
        : null}
    </div>
  );
};

export default Showlists;
