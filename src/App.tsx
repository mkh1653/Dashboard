import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import NotFound from "./pages/Error/Notfound";
import Profile from "./pages/Profile";
import Template from "./template";
import Dashboard from "./pages/Dashboard";
import TodoList from "./pages/TodoList";
import Invoice from "./pages/Invoice";
import Users from "./pages/Users";
import User from "./pages/User";

const dark = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "rgb(10, 25, 41)",
      paper: "rgb(5 17 31)",
    },
  },
});

const light = createTheme({
  palette: {
    mode: "light",
  },
});

function App() {
  const [theme, setTheme] = useState(true);
  const handlerTheme = () => {
    setTheme(!theme);
  };

  return (
    <ThemeProvider theme={theme ? dark : light}>
      <Routes>
        <Route path='/' element={<Template />}>
          <Route index element={<Dashboard />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/todolist' element={<TodoList />} />
          <Route path='/invoice' element={<Invoice />} />
          <Route path='/users' element={<Users />} />
          <Route path='/users'>
            <Route path=':slug' element={<User />} />
          </Route>
        </Route>
        {/* 404 page */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
