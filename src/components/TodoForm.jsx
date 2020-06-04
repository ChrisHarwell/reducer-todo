import React from "react";

const TodoForm = (props) => {

  return (
    <>
       <form onSubmit={props.onSubmit}>
        <input
          type="text"
          name="item"
          value={props.value}
          onChange={props.onChange}
        />
        <button>Add Todo</button>
      </form>
    </>
  )
};

export default TodoForm;
