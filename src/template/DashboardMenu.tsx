import React from "react";
import { Link } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import { useTheme } from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileInvoiceDollar } from "../components/fontawesome/pro-solid-svg-icons";
import { faListCheck } from "../components/fontawesome/pro-solid-svg-icons";
import { faUser } from "../components/fontawesome/pro-solid-svg-icons";
import { faUsers } from "../components/fontawesome/pro-solid-svg-icons";

interface DashboardMenuInterface {
  drawerState: boolean;
  drawerWidth: number;
}

const DashboardMenu: React.FC<DashboardMenuInterface> = (props) => {
  const theme = useTheme();

  return (
    <Drawer
      anchor='left'
      variant='persistent'
      open={props.drawerState}
      ModalProps={{ keepMounted: true }}
      sx={{
        width: props.drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: props.drawerWidth,
          boxSizing: "border-box",
        },
      }}>
      <Toolbar />
      <Stack direction='row' alignItems='center' spacing={1} py={3} px={1}>
        <Avatar
          sx={{
            width: 50,
            height: 50,
            backgroundColor: theme.palette.primary.light,
          }}>
          M
        </Avatar>
        <Stack>
          <Typography variant='subtitle2'>Mahdi Khoramjoo</Typography>
          <Typography variant='caption' color={theme.palette.text.secondary}>
            Admin
          </Typography>
        </Stack>
      </Stack>
      <Divider variant='middle' />
      <List
        sx={{
          "& > a ": {
            color: theme.palette.text.primary,
            textDecoration: "none",
          },
        }}>
        <Link to='/'>
          <ListItemButton>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText>Dashboard</ListItemText>
          </ListItemButton>
        </Link>
        <Link to='/profile'>
          <ListItemButton>
            <ListItemIcon>
              <FontAwesomeIcon icon={faUser} size='lg' />
            </ListItemIcon>
            <ListItemText>Profile</ListItemText>
          </ListItemButton>
        </Link>
        <Link to='/todolist'>
          <ListItemButton>
            <ListItemIcon>
              <FontAwesomeIcon icon={faListCheck} size='lg' />
            </ListItemIcon>
            <ListItemText>Todo List</ListItemText>
          </ListItemButton>
        </Link>
        <Link to='/invoice'>
          <ListItemButton>
            <ListItemIcon>
              <FontAwesomeIcon icon={faFileInvoiceDollar} size='lg' />
            </ListItemIcon>
            <ListItemText>Invoce</ListItemText>
          </ListItemButton>
        </Link>
        <Link to='/users'>
          <ListItemButton>
            <ListItemIcon>
              <FontAwesomeIcon icon={faUsers} size='lg' />
            </ListItemIcon>
            <ListItemText>Users</ListItemText>
          </ListItemButton>
        </Link>
      </List>
    </Drawer>
  );
};

export default DashboardMenu;
