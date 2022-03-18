import React from "react";
import TextField from "@mui/material/TextField";
import { Button, Card, CardContent, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { Box } from "@mui/system";
import { addTodo, addTodoAsync } from "../redux/todoSlice";
import { useDispatch } from "react-redux";

const AddTodo = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const value = data.title;

    if (value) {
      dispatch(addTodoAsync({ title: value }));

      reset({
        title: "",
      });
    }
  };

  return (
    <Card sx={{ marginTop: "20px" }}>
      <CardContent>
        {/* Title */}
        <Typography variant="h5" sx={{ margin: "10px 0 10px 0px" }}>
          Add new todo
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Form: Input */}
          <TextField
            id="outlined-basic"
            name="title"
            label="Enter a new task..."
            variant="outlined"
            fullWidth
            {...register("title", { required: "Title is required." })}
            error={Boolean(errors.title)}
            helperText={errors.title?.message}
          />

          {/* Submit Form */}
          <Box sx={{ display: "flex", justifyContent: "end" }}>
            <Button type="submit">Add</Button>
          </Box>
        </form>
      </CardContent>
    </Card>
  );
};

export default AddTodo;
