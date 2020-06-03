import React, { useState, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

const todoInitialState = [
  {
    item: "Learn about reducers",
    completed: false,
    id: uuidv4(),
  },
];
const todoReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_COMPLETED":
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, completed: !item.completed }
          : item
      );
    // return {
    //   ...state,
    //   completed: !state.completed,
    // };
    case "ADD_TODO":
      return [...state, action.payload];
    default:
      return state;
  }
};

function App() {
  const [todoState, dispatch] = useReducer(todoReducer, todoInitialState);
  const [newTodo, setNewTodo] = useState({
    item: "",
    completed: false,
    id: uuidv4(),
  });

  const handleChanges = (e) => {
    setNewTodo({ ...newTodo, item: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", payload: newTodo });
    setNewTodo({
      item: "",
      completed: false,
      id: uuidv4(),
    });
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="item"
          value={newTodo.item}
          onChange={handleChanges}
        />
        <button>Update title</button>
        {todoState.map((item) => {
          return (
            <>
              <input
                type="checkbox"
                checked={item.completed}
                onClick={() => {
                  dispatch({ type: "TOGGLE_COMPLETED", payload: item.id });
                }}
              />
              <span>{item.item}</span>
            </>
          );
        })}

        <pre>{JSON.stringify(todoState, null, 2)}</pre>
      </form>
    </div>
  );
}

export default App;
