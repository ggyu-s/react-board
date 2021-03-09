import { Col, Row } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { boardLists } from "../actions/board";
import BoardNav from "../components/Board";

const Board = () => {
  return (
    <>
      <BoardNav />
    </>
  );
};

export default Board;
