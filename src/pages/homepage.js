import React, { useState, useEffect } from "react";
import Header from "../component/HomePage/header";
import NavBar from "../uilities/NavBar";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetails from "./moviedetails";
import Login from "../component/Accountpage/login";
import Create from "../component/Accountpage/create";
import Createwatchlist from "../uilities/createwatchlist";
import Whatchlistpage from "../uilities/whatchlistpage";
import Historypage from "./historypage";

const Homepage = () => {
  const [state, setState] = useState([]);
  const [Count, setCount] = useState([]);

  const fetchAxios = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=aeb5c68e348c5ac8a766761c2322c952&language=en&page=1`
    );

    setState(res.data.results);
    setCount(res.data.total_pages);
  };

  const changepage = async (numofpage) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=aeb5c68e348c5ac8a766761c2322c952&language=en&page=${numofpage}`
    );

    setState(res.data.results);
    setCount(res.data.total_pages);
  };

  useEffect(() => {
    fetchAxios();
  }, []);

  const searching = async (word) => {
    if (word === "") {
      fetchAxios();
    } else {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=aeb5c68e348c5ac8a766761c2322c952&%20&query=${word}&language=en`
      );

      setState(res.data.results);
      setCount(res.data.total_pages);
    }
  };

  const [state2, setState2] = useState([]);
  const fetchAxios2 = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=aeb5c68e348c5ac8a766761c2322c952&page=227`
    );

    setState2(res.data.results);
  };

  useEffect(() => {
    fetchAxios2();
  }, []);

  const [state3, setState3] = useState([]);
  const fetchAxios3 = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=aeb5c68e348c5ac8a766761c2322c952&page=203`
    );

    setState3(res.data.results);
  };

  useEffect(() => {
    fetchAxios3();
  }, []);

  return (
    <div id="sdmainpageds">
      <BrowserRouter>
        <div>
          <NavBar style={{ display: "none" }} />
        </div>
        <div>
          <Routes>
            <Route path="/Login" element={<Login />} />
            <Route path="/Create" element={<Create />} />
            <Route
              path="/movieDetails/:id"
              element={<MovieDetails movies2={state} />}
            />
            <Route
              path="/"
              element={
                <Header
                  searchopration={searching}
                  movies={state}
                  count_of_pages={Count}
                  importingnum={changepage}
                />
              }
            />
            <Route path="/Createwatchlist" element={<Createwatchlist />} />
            <Route
              path="/detailsaboutCreateingwatchlist/:id"
              element={<Whatchlistpage movies={state3} />}
            />
            <Route
              path="/Historypage"
              element={<Historypage movies={state2} />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Homepage;
