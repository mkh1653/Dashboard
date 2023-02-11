import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Breadcrumb from "../components/Breadcrumb";
import { styled } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

interface MainInterface {
  drawerWidth: number;
  drawerState: boolean;
  children: React.ReactNode;
}

interface ContainerInterface {
  drawerwidth?: number;
  drawerState?: boolean;
}

const padding = 3;

const Container = styled("main", {
  shouldForwardProp: (prop) => prop !== "drawerState",
})<ContainerInterface>(({ theme, drawerState, drawerwidth }) => ({
  minHeight: `calc(100vh - (${theme.spacing(padding)} * 2))`,
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
  return (
    <Container drawerState={props.drawerState} drawerwidth={props.drawerWidth}>
      <Toolbar />
      <Breadcrumb />
      {props.children}
    </Container>
  );
};

export default Main;
