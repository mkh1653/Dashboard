import React, { useState } from "react";
import DashboardMenu from "./DashboardMenu";
import Header from "./Header";
import Main from "./Main";

const Template: React.FC = () => {
  const [drawerState, setDrawerState] = useState(true);
  const drawerToggle = () => {
    setDrawerState(!drawerState);
  };

  const drawerWidth = 240;

  return (
    <div>
      <DashboardMenu drawerState={drawerState} drawerWidth={drawerWidth} />
      <Header
        pageName='Dashboard'
        handlerDrawer={drawerToggle}
        drawerState={drawerState}
        drawerWidth={drawerWidth}
      />
      <Main drawerState={drawerState} drawerWidth={drawerWidth} />
    </div>
  );
};

export default Template;
