import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const mapState = (state: any) => {
  return { value: state.value };
};
const mapDispatch = (dispatch: any) => {
  return {
    addT: (payload: number) => dispatch({ type: "addT", payload }),
    add: () => dispatch({ type: "add" }),
    sub: () => dispatch({ type: "sub" }),
  };
};

function Home(props: any) {
  console.log("props: ", props);
  const { value, dispatch, add, sub, addT } = props;
  return (
    <div>
      Home页
      <div>value:{value}</div>
      <div>
        <Link to="about">about</Link>
      </div>
      <button onClick={add}>+</button>
      <button onClick={sub}>-</button>
      <button onClick={() => addT(2)}>+2</button>
    </div>
  );
}

export default connect(mapState, mapDispatch)(Home);
