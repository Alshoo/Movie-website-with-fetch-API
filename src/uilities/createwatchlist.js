import React, { useState } from "react";
import { Button } from "react-bootstrap";

const Createwatchlist = () => {
  const [title, settitle] = useState();
  const [describtion, setdescribtion] = useState();

  const list = [
    {
      title,
      describtion,
    },
  ];
  let lists;
  if (localStorage.nameoffilmlist != null) {
    lists = JSON.parse(localStorage.nameoffilmlist);
  } else {
    lists = [];
  }

  lists.push(list);
  const updatedata = () => {
    if (list.length != null) {
      localStorage.setItem("nameoffilmlist", JSON.stringify(lists));
    }
  };
  return (
    <div id="Createwatchlist">
      <div id="titleofCreatewatchlist">
        <h1>Create a new Watchlist</h1>
      </div>
      <div>
        <label htmlFor="nameinputlist">Name</label>
        <br></br>
        <input
          type="text"
          id="nameinputlist"
          onKeyUp={(e) => settitle(e.target.value)}
        />{" "}
        <br></br>
        <br></br>
        <br></br>
        <label htmlFor="descriptioninputlist">Description</label>
        <br></br>
        <input
          type="text"
          id="descriptioninputlist"
          onKeyUp={(e) => setdescribtion(e.target.value)}
        />
        <Button
          variant="danger"
          href="/"
          onClick={updatedata}
          className="mt-3"
          style={{ color: "black", fontWeight: "bold" }}
        >
          Create Watchlist
        </Button>
      </div>
    </div>
  );
};

export default Createwatchlist;
