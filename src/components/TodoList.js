import React from "react";
import Paper from "@mui/material/Paper";
import TodoItem from "./TodoItem";
import List from "@mui/material/List";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <Paper
      sx={{
        padding: "10px",
        margin: "20px auto",
        height: "350px",
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
