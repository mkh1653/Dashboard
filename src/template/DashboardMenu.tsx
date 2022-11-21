import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";

import PersonIcon from "@mui/icons-material/Person";
import DashboardIcon from '@mui/icons-material/Dashboard';

interface DashboardMenuInterface {
  drawerState: boolean;
  drawerWidth: number;
}

const DashboardMenu: React.FC<DashboardMenuInterface> = (props) => {
  return (
    <Drawer
      anchor='left'
      open={props.drawerState}
      variant='persistent'
      sx={{
        width: props.drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: props.drawerWidth,
          boxSizing: "border-box",
        },
      }}>
      <List>
        <ListItemButton>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText>Dashboard</ListItemText>
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText>Profile</ListItemText>
        </ListItemButton>
      </List>
    </Drawer>
  );
};

export default DashboardMenu;
