import React, { useState } from "react";

const AddState = ({ eventHandler, eventHandler2, stateId }) => {
  const [name, setName] = useState("");
  const onChange = (e) => {
    setName(e.target.value);
  };
  const addHandler = () => {
    eventHandler(stateId + 1, name);
  };
  const minusHandler = () => {
    eventHandler2(stateId);
  };

  return (
    <>
      <input type="text" value={name} onChange={onChange}></input>
      <button onClick={addHandler}>+</button>
      <button onClick={minusHandler}>-</button>
    </>
  );
};

export default AddState;

// 여기서 state를 관리한다.
// reducer함수는 state와 action을 받는다.
export const reducer = function reducer(state, action) {
  // action에는 dispatch로 보낸 값이 그대로 온다.
  console.log(action);
  // state는 변하기 않는 이상 state의 상태 그대로가 전달된다.
  console.log(state);

  switch (action.any) {
    case "안녕":
      return [...state, { id: action.id, name: action.name }];
    case "또와":
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
};
