import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/NoteAltOutlined";

export default function TopAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" color="inherit" aria-label="menu">
            <MenuIcon sx={{ mr: 1 }} />
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              Todo
            </Typography>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
