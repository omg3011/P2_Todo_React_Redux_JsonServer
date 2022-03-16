import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Controller, useForm } from "react-hook-form";

const AddTodo = () => {
  const [value, setValue] = React.useState("");
  const { handleSubmit, reset, control } = useForm();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = () => {
    console.log(value);
  };

  const handleReset = () => setValue("");

  return (
    <Card
      sx={{
        padding: "10px",
        margin: "20px auto",
      }}
    >
      <CardContent> 
        <Typography
          variant="h5"
          color="text.secondary"
          sx={{ display: "flex" }}
          gutterBottom
        >
          Add New Todo
        </Typography>

        <TextField
          id="outlined-multiline-flexible"
          label="Enter new todo's"
          multiline
          maxRows={4}
          value={value}
          onChange={handleChange}
          sx={{ width: "100%" }}
        />

        <Box
          sx={{
            marginTop: "15px",
            display: "flex",
            justifyContent: "end",
            alignItems: "end",
          }}
        >
          <Button variant="contained" onClick={handleSubmit}>
            Add
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default AddTodo;
