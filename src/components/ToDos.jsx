import React, { useState, useReducer } from "react";
import { todoReducer, todoState } from "../reducers/ReducerTodos";

const [todoState, dispatch] = useReducer(todoReducer, todoState);
const [ newTodo, setNewTodo] = useState("");

const handleChanges = e => {
    setNewTodo(e.target.value);
};
