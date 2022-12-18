import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import TodoList from "../pages/TodoList";
import Invoice from "../pages/Invoice";
import { styled, useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import useAppBarHeight from "../components/useAppBarHeight";

interface MainInterface {
  drawerWidth: number;
  drawerState: boolean;
}

interface ContainerInterface {
  drawerwidth?: number;
  drawerState?: boolean;
}

const padding = 3;

const Container = styled("main", {
  shouldForwardProp: (prop) => prop !== "drawerState",
})<ContainerInterface>(({ theme, drawerState, drawerwidth }) => ({
  flexGrow: 1,
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(padding),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.easeOut,
    duration: 100,
  }),
  marginLeft: 0,
  ...(drawerState &&
    useMediaQuery(theme.breakpoints.up("sm")) && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: `${drawerwidth}px`,
    }),
}));

const Main: React.FC<MainInterface> = (props) => {
  const theme = useTheme();
  const appBarMinheight = useAppBarHeight();

  return (
    <Container
      drawerState={props.drawerState}
      drawerwidth={props.drawerWidth}
      sx={{
        minHeight: `calc(100vh - ${appBarMinheight}px - (${theme.spacing(
          padding
        )} * 2))`,
      }}>
      <Dashboard />
      {/* <Profile /> */}
      {/* <TodoList /> */}
      {/* <Invoice /> */}
    </Container>
  );
};

export default Main;
