import React, { useState, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

const todoInitialState = {
  item: "Learn about reducers",
  completed: false,
  id: uuidv4(),
};
const todoReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_COMPLETED":
      return {
        ...state,
        completed: !state.completed,
      };
    case "ADD_TODO":
      return {
        ...state,
        item: action.payload,
        completed: false,
      };
    default:
      return state;
  }
};

function App() {
  const [todoState, dispatch] = useReducer(todoReducer, todoInitialState);
  const [newTodo, setNewTodo] = useState([""]);

  const handleChanges = (e) => {
    setNewTodo(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", payload: newTodo });
    // setNewTodo("");
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="newTodo"
          // value={newTodo}
          onChange={handleChanges}
        />
        <button
          onClick={() => {
            dispatch({ type: "ADD_TODO", payload: newTodo });
          }}
        >
          Update title
        </button>
        <input
          type="radio"
          onClick={() => {
            dispatch({ type: "TOGGLE_COMPLETED" });
          }}
        ></input>
        <pre>{JSON.stringify(todoState, null, 2)}</pre>
      </form>
    </div>
  );
}

export default App;
