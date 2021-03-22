import { Button } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { boardListItem, boardListRemove } from "../../actions/board";
import { BOARD_LIST_SUCCESS, BOARD_REMOVE_SUCCESS } from "../../reducers/board";

function Boardview({ match }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    boardList,
    isBoardListOneLoading,
    isBoardListRemoveLoading,
    isBoardListRemoveDone,
  } = useSelector((state) => state.board);
  const { isLogInUser } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(
      boardListItem({
        id: Number(match.params.id),
      })
    );
  }, [dispatch, match.params.id]);

  useEffect(() => {
    if (isBoardListRemoveDone) {
      history.push("/board");
    }
  }, [isBoardListRemoveDone, history]);

  const onClickRemove = useCallback(
    (id) => {
      dispatch(
        boardListRemove({
          type: BOARD_REMOVE_SUCCESS,
          payload: {
            id,
          },
        })
      );
    },
    [dispatch]
  );

  const onClickUpdate = useCallback(() => {
    history.push(`/boardupdate/${match.params.id}`);
  }, [history, match.params.id]);

  return (
    <div>
      {isBoardListOneLoading ? (
        <div>loading...</div>
      ) : (
        boardList && (
          <div key={boardList.id}>
            <div>{boardList.id}</div>
            <div>{boardList.writer}</div>
            <div>{boardList.subject}</div>
            <div>{boardList.content}</div>
            <div>{boardList.createdAt}</div>
            {isLogInUser && boardList.user === isLogInUser.id ? (
              <>
                <Button onClick={onClickUpdate}>수정</Button>
                <Button
                  onClick={() => onClickRemove(boardList.id)}
                  loading={isBoardListRemoveLoading}
                >
                  삭제
                </Button>
              </>
            ) : null}
          </div>
        )
      )}
    </div>
  );
}

export default Boardview;
