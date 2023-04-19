import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { store } from "../../index";

function Home() {
  return (
    <div>
      Home页
      <div>
        <Link to="about">about</Link>
      </div>
      <button
        onClick={() => {
          store.dispatch({ type: "add" });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          store.dispatch({ type: "sub" });
        }}
      >
        -
      </button>
    </div>
  );
}

export default Home;
