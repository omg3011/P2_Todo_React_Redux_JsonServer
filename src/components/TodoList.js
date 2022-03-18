import React, { useEffect } from "react";
import Paper from "@mui/material/Paper";
import TodoItem from "./TodoItem";
import List from "@mui/material/List";
import { useSelector, useDispatch } from "react-redux";
import { getTodoAsync } from "../redux/todoSlice";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(getTodoAsync());
  }, [dispatch]);

  return (
    <Paper
      sx={{
        padding: "10px",
        margin: "20px auto",
        height: "350px",
        overflow: "auto",
      }}
    >
      <List>
        {todos.map((item) => (
          <TodoItem
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
      </List>
    </Paper>
  );
};

export default TodoList;
