import "./App.css";
import TopAppBar from "./components/TopAppBar";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import CounterTodo from "./components/CounterTodo";
import { Box } from "@mui/system";

function App() {
  return (
    <div className="App">
      <TopAppBar />

      <Box sx={{ width: "50%", margin: "auto" }}>
        <AddTodo />
        <TodoList />
        <CounterTodo />
      </Box>
    </div>
  );
}

export default App;
