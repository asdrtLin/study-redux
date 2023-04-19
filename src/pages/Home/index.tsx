import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      Home页
      <div>
        <Link to="about">about</Link>
      </div>
    </div>
  );
}

export default Home;
