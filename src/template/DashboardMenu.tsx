import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";

import DashboardIcon from "@mui/icons-material/Dashboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileInvoiceDollar } from "@fortawesome/free-solid-svg-icons";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

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
            <FontAwesomeIcon icon={faUser} size='lg' />
          </ListItemIcon>
          <ListItemText>Profile</ListItemText>
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <FontAwesomeIcon icon={faListCheck} size='lg' />
          </ListItemIcon>
          <ListItemText>Todo List</ListItemText>
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <FontAwesomeIcon icon={faFileInvoiceDollar} size='lg' />
          </ListItemIcon>
          <ListItemText>Invoce</ListItemText>
        </ListItemButton>
      </List>
    </Drawer>
  );
};

export default DashboardMenu;
