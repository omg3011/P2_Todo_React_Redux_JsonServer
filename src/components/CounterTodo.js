import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const CounterTodo = () => {
  const todos = useSelector((state) =>
    state.todos.filter((todo) => todo.completed === true)
  );

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Total Count: {todos.length}</Typography>
      </CardContent>
    </Card>
  );
};

export default CounterTodo;
