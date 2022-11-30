import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Template from "./template";

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
      <Template />
    </ThemeProvider>
  );
}

export default App;
