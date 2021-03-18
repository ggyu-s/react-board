import { Button, Col, Input, Row } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { boardWrite } from "../../actions/board";
import { BOARD_LISTS_REQUEST, BOARD_WRITE_SUCCESS } from "../../reducers/board";

function Boardwrite() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { isLogInUser } = useSelector((state) => state.user);
  const { isBoardWriteDone, isBoardWriteLoading } = useSelector(
    (state) => state.board
  );
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");

  const onChangeSubject = useCallback((e) => {
    setSubject(e.currentTarget.value);
  }, []);

  const onChangeContent = useCallback((e) => {
    setContent(e.currentTarget.value);
  }, []);

  const onWriteBtn = useCallback(() => {
    console.log(isLogInUser);
    dispatch(
      boardWrite({
        type: BOARD_WRITE_SUCCESS,
        payload: {
          writer: isLogInUser.nickname,
          subject,
          content,
        },
      })
    );
  }, [isLogInUser, dispatch, subject, content]);

  const onCancle = useCallback(() => {
    history.push("/board");
  }, [history]);

  useEffect(() => {
    if (!isLogInUser) {
      alert("로그인 해주세요");
      history.push("/login");
    }
    if (isBoardWriteDone) {
      history.push("/board");
    }
  }, [isLogInUser, history, isBoardWriteDone]);

  return (
    <div>
      <Row>
        <Col sm={8}>제목</Col>
        <Col sm={16}>
          <Input onChange={onChangeSubject} />
        </Col>
      </Row>
      <Row>
        <Col sm={8}>내용</Col>
        <Col sm={16}>
          <TextArea onChange={onChangeContent} />
        </Col>
      </Row>
      <Button onClick={onWriteBtn} loading={isBoardWriteLoading}>
        등록
      </Button>
      <Button onClick={onCancle}>취소</Button>
    </div>
  );
}

export default Boardwrite;
