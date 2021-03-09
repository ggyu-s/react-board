import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { boardListItem } from "../../actions/board";
import board, { BOARD_LIST_SUCCESS } from "../../reducers/board";

function Boardview({ match }) {
  const dispatch = useDispatch();
  const { boardList, isBoardListOneLoading } = useSelector(
    (state) => state.board
  );
  let boardContentView = null;

  useEffect(() => {
    dispatch(
      boardListItem({
        type: BOARD_LIST_SUCCESS,
        payload: {
          id: Number(match.params.id),
        },
      })
    );
  }, [dispatch, match.params.id]);
  useEffect(() => {
    if (boardList) {
      console.log(true);
      boardContentView = <div>{boardList.id}</div>;
    }
  }, [boardList]);

  return (
    <div>
      {isBoardListOneLoading ? <div>loading...</div> : boardContentView}
    </div>
  );
}

export default Boardview;
