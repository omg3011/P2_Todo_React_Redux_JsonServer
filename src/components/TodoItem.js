import React from "react";
import {
  ListItem,
  ListItemText,
  Divider,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch } from "react-redux";
import {
  toggleCompleted,
  deleteTodo,
  editTodo,
  toggleCompleteAsync,
  deleteTodoAsync,
} from "../redux/todoSlice";

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  const [openDialog, setOpenDialog] = React.useState(false);
  const [editText, setEditText] = React.useState("");

  const handleOpenDialog = (flag) => {
    setOpenDialog(flag);
  };

  const handleDialogTextChange = (text) => {
    setEditText(text);
  };

  const handleCheckboxClick = () => {
    completed = !completed;
    dispatch(toggleCompleteAsync({ id, completed: completed }));
  };

  const handleEditClick = () => {
    handleOpenDialog(true);
  };

  const handleDeleteClick = () => {
    dispatch(deleteTodoAsync({ id }));
  };

  return (
    <>
      <ListItem sx={{ height: "60px" }}>
        <Checkbox onChange={handleCheckboxClick} />
        <ListItemText>{title}</ListItemText>
        <Button variant="contained" color="error" onClick={handleDeleteClick}>
          Delete
        </Button>
        <Button
          variant="contained"
          sx={{ marginLeft: "10px" }}
          onClick={handleEditClick}
        >
          Edit
        </Button>
      </ListItem>

      <Divider />

      {/* Dialog */}
      <Dialog open={openDialog} onClose={() => handleOpenDialog(false)}>
        <DialogTitle>Edit Todo</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Enter Title"
            value={editText}
            type="text"
            fullWidth
            onChange={() => handleDialogTextChange(editText)}
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleOpenDialog(false)}>Cancel</Button>
          <Button
            onClick={() => {
              editTodo({ id: id, title: editText });
              handleOpenDialog(false);
            }}
          >
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default TodoItem;
