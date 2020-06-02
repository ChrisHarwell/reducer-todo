import React, { useReducer, useState } from 'react';
import TodoForm from './TodoForm';
import { todoReducer, todoInitialState } from "../reducers/ReducerTodos";

const TodoList = props => { 
    const [todoState, dispatch] = useReducer(todoReducer, todoInitialState);
    const [newTodo, setNewTodo] = useState("");
  
    const handleChanges = (e) => {
      setNewTodo(e.target.value);
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch({ type: "ADD_TODO", payload: newTodo });
      console.log(todoState);
      // setNewTodo("");
    };
    const toggleTodo = e => {
      dispatch({ type: "TOGGLE_COMPLETED", payload: todoState.completed })
    }
    return (
        <div>
            {todo.map((todo) => (
                <TodoForm 
                    key={todo.id}
                    todo={todo}
                    onClick={props.toggleTodo}
                />
            ))}
            <button onClick={props.clearTodo}>Clear Todos</button>
        </div>
    );
};

export default TodoList;