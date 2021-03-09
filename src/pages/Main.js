import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { init } from "../actions/user";

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(init());
  });

  return <div>Main</div>;
};

export default Main;
