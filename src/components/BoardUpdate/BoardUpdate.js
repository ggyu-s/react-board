import { Button, Col, Input, Row } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { boardListUpdate } from "../../actions/board";
import { BOARD_UPDATE_SUCCESS } from "../../reducers/board";

function BoardUpdate() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { isLogInUser } = useSelector((state) => state.user);
  const {
    boardList,
    isBoardListUpdateLoading,
    isBoardListUpdateDone,
  } = useSelector((state) => state.board);
  const [subject, setSubject] = useState(boardList[0].subject);
  const [content, setContent] = useState(boardList[0].content);

  const onChangeSubject = useCallback((e) => {
    setSubject(e.currentTarget.value);
  }, []);

  const onChangeContent = useCallback((e) => {
    setContent(e.currentTarget.value);
  }, []);

  const onUpdateBtn = useCallback(() => {
    dispatch(
      boardListUpdate({
        type: BOARD_UPDATE_SUCCESS,
        payload: {
          id: boardList[0].id,
          nickname: boardList[0].nickname,
          subject,
          content,
          count: boardList[0].count,
          date: "2021-03-25",
        },
      })
    );
  }, [dispatch, boardList, subject, content]);

  const onCancle = useCallback(() => {
    history.push("/board");
  }, [history]);

  useEffect(() => {
    // if (!isLogInUser) {
    //   alert("로그인 해주세요");
    //   history.push("/login");
    // }
    if (isBoardListUpdateDone) {
      history.push(`/board/${boardList[0].id}`);
    }
  }, [isLogInUser, history, isBoardListUpdateDone]);

  return (
    <div>
      수정
      <Row>
        <Col sm={8}>제목</Col>
        <Col sm={16}>
          <Input onChange={onChangeSubject} value={subject} />
        </Col>
      </Row>
      <Row>
        <Col sm={8}>내용</Col>
        <Col sm={16}>
          <TextArea onChange={onChangeContent} value={content} />
        </Col>
      </Row>
      <Button onClick={onUpdateBtn} loading={isBoardListUpdateLoading}>
        수정
      </Button>
      <Button onClick={onCancle}>취소</Button>
    </div>
  );
}

export default BoardUpdate;
