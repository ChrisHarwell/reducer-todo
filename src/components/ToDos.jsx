import React, { useState, useReducer } from "react";
import { todoReducer, todoInitialState } from "../reducers/ReducerTodos";

const ToDos = () => {
  const [todoState, dispatch] = useReducer(todoReducer, todoInitialState.item);
  const [newTodo, setNewTodo] = useState("");

  const handleChanges = (e) => {
    setNewTodo(e.target.value);
  };
  return (
    <>
      <div>
        <input
          type="text"
          name="newTodo"
          value={newTodo}
          onChange={handleChanges}
        />
        <button
          onClick={() => {
            dispatch({ type: "UPDATE_TITLE", payload: newTodo });
          }}
        >
          Update title
        </button>
        <input
          type="radio"
          checked={!todoState.completed}
          onClick={() => {
            dispatch({ type: "TOGGLE_COMPLETED" });
          }}
        ></input>
      </div>
    </>
  );
};

export default ToDos;
