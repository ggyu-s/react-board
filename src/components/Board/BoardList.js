import { Row } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import BoardListItem from "./BoardListItem";

const BoardList = () => {
  const { boardLists } = useSelector((state) => state.board);

  return (
    <>
      {boardLists.map((boardList, idx) => (
        <BoardListItem key={boardList.id} boardList={boardList} />
      ))}
    </>
  );
};

export default BoardList;
