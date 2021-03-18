import { Col } from "antd";
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const BoardListItem = ({ boardList }) => {
  const dispatch = useDispatch();
  const onClickSubject = useCallback(() => {
    dispatch(BoardListItem(boardList.id));
  }, [dispatch, boardList]);

  return (
    <>
      <Col span={4} style={{ textAlign: "center" }}>
        {boardList.id}
      </Col>
      <Col span={7} style={{ textAlign: "center" }}>
        <Link to={`/board/${boardList.id}`}>{boardList.subject}</Link>
      </Col>
      <Col span={5} style={{ textAlign: "center" }}>
        {boardList.writer}
      </Col>
      <Col span={4} style={{ textAlign: "center" }}>
        {boardList.createdAt}
      </Col>
      <Col span={4} style={{ textAlign: "center" }}>
        {boardList.count}
      </Col>
    </>
  );
};

export default BoardListItem;
