import Drawer from "@mui/material/Drawer";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import { useTheme } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import useAppBarHeight from "../components/useAppBarHeight";

import DashboardIcon from "@mui/icons-material/Dashboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileInvoiceDollar } from "@fortawesome/new-solid-svg-icons";
import { faListCheck } from "@fortawesome/new-solid-svg-icons";
import { faUser } from "@fortawesome/new-solid-svg-icons";

interface DashboardMenuInterface {
  drawerState: boolean;
  drawerWidth: number;
}

const DashboardMenu: React.FC<DashboardMenuInterface> = (props) => {
  const theme = useTheme();
  const AppBarHeight = useAppBarHeight();
  const match = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Drawer
      anchor='left'
      open={props.drawerState}
      variant='persistent'
      sx={{
        width: props.drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          marginTop: match ? AppBarHeight + "px" : 0,
          width: props.drawerWidth,
          boxSizing: "border-box",
        },
      }}>
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
