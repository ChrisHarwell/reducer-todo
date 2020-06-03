import React, { useState, useReducer } from "react";
import { todoReducer, todoInitialState } from "../reducers/ReducerTodos";

const ToDos = () => {

  const handleChanges = (e) => {
    setNewTodo(e.target.value);
  };
  return (
    <>
      <form>
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
      </form>
    </>
  );
};

export default ToDos;
