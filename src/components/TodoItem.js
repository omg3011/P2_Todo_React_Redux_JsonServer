import React from "react";
import { ListItem, ListItemText, Divider, Button } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";

const TodoItem = ({ id, title, completed }) => {
  return (
    <>
      <ListItem sx={{ height: "60px" }}>
        <Checkbox />
        <ListItemText>{title}</ListItemText>
        <Button variant="contained" color="error">
          Delete
        </Button>
        <Button variant="contained" sx={{ marginLeft: "10px" }}>
          Edit
        </Button>
      </ListItem>

      <Divider />
    </>
  );
};

export default TodoItem;
