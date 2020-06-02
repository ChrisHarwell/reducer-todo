import React, { useState, useReducer } from "react";

const TodoForm = (props) => {

  return (
    <>
      <form onSubmit={props.handleSubmit}>
        <input
          type="text"
          name="title"
          onChange={props.handleChanges}
          value={props.newTodo}
        />
        <input
          type="radio"
          name="completed"
          toggleTodo={props.toggleTodo}
        ></input>
        <button type="submit">New Todo</button>
      </form>
      <pre>{JSON.stringify(props.todoState, null, 2)}</pre>
    </>
  );
};

export default TodoForm;
