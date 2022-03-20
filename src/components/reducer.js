// useReducer는 여기서 관리한다.
import React, { useReducer } from "react";
import AddState from "../reducer";
import { reducer } from "../reducer";

// 초기값, default value가 존재해야한다.
const initialState = [
  { id: 1, name: "김김김" },
  { id: 2, name: "박박박" },
];

const Reducer = () => {
  // reducer의 정의는 index.js에서 한다.
  const [number, dispatch] = useReducer(reducer, initialState);
  // reducer를 사용할때는
  const plusButton = (id, name) => {
    dispatch({ any: "안녕", id: id, name: name });
  };
  const minusButton = (id) => {
    dispatch({ any: "또와", id: id });
  };
  return (
    <>
      {number.length > 0 ? (
        <>
          {number.map((v) => (
            <div>
              {v.id} . {v.name}
            </div>
          ))}
          <AddState
            eventHandler={plusButton}
            eventHandler2={minusButton}
            stateId={number[number.length - 1].id}
          ></AddState>
        </>
      ) : (
        <div>0</div>
      )}
    </>
  );
};

export default Reducer;
