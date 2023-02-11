import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material";
import DashboardMenu from "./DashboardMenu";
import Header from "./Header";
import Main from "./Main";

const Template: React.FC = () => {
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerState, setDrawerState] = useState(match ? false : true);
  const drawerWidth = 240;

  const drawerToggle = () => {
    setDrawerState(!drawerState);
  };

  return (
    <div>
      <DashboardMenu drawerWidth={drawerWidth} drawerState={drawerState} />
      <Header drawerWidth={drawerWidth} handlerDrawer={drawerToggle} />
      <Main drawerState={drawerState} drawerWidth={drawerWidth}>
        <Outlet />
      </Main>
    </div>
  );
};

export default Template;
