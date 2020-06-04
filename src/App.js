import React, { useState, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import "./css/App.min.css";
import TodoForm from "./components/TodoForm";
import { todoReducer, todoInitialState } from "./reducers/ReducerTodos";

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

  const clearCompleted = () => {
    dispatch({ type: "CLEAR_COMPLETED", payload: todoState.completed})
  }
  return (
    <div className="App">
      <TodoForm
        className="TodoForm"
        value={newTodo.item}
        onSubmit={handleSubmit}
        onChange={handleChanges}
      />
      {todoState.map((item) => {
        return (
          <div className="TodoComplete">
            <input
            
              type="checkbox"
              checked={item.completed}
              onClick={() => {
                dispatch({ type: "TOGGLE_COMPLETED", payload: item.id });
              }}
            />
            <span className="TodoItem">{item.item}</span>
          </div>
        );
      })}

      <pre>{JSON.stringify(todoState, null, 2)}</pre>
    </div>
  );
}

export default App;
