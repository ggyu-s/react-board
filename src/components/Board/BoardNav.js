import { Button, Col, Row } from "antd";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { boardLists } from "../../actions/board";
import BoardList from "./BoardList";

const BoardNav = () => {
  const dispatch = useDispatch();
  const { isBoardListLoading } = useSelector((state) => state.board);
  const history = useHistory();

  useEffect(() => {
    dispatch(boardLists());
  }, [dispatch]);

  const onBoardWrite = useCallback(() => {
    history.push("/boardwrite");
  }, []);
  return (
    <>
      <Row>
        <Col span={24} style={{ textAlign: "center" }}>
          Board
        </Col>
        <Col span={4} style={{ textAlign: "center" }}>
          No
        </Col>
        <Col span={7} style={{ textAlign: "center" }}>
          Subject
        </Col>
        <Col span={5} style={{ textAlign: "center" }}>
          Writer
        </Col>
        <Col span={4} style={{ textAlign: "center" }}>
          Date
        </Col>
        <Col span={4} style={{ textAlign: "center" }}>
          Count
        </Col>
        {isBoardListLoading ? "LOADING..." : <BoardList />}
      </Row>
      <Button onClick={onBoardWrite}>글쓰기</Button>
    </>
  );
};

export default BoardNav;
