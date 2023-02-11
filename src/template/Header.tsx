import React, { useState } from "react";
import Box from "@mui/system/Box";
import AppBar from "@mui/material/AppBar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LightbulbIcon from "@mui/icons-material/Lightbulb";

interface HeaderInterface {
  drawerWidth: number;
  handlerDrawer: () => void;
}

const Header: React.FC<HeaderInterface> = (props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handlerTheme = () => {
    handleMenuClose();
  };

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}>
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem onClick={handlerTheme}>
        <LightbulbIcon fontSize='small' sx={{ mr: 2 }} />
        <span>Theme mode</span>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        id="appBar"
        position='fixed' sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='open drawer'
            sx={{ mr: 2 }}
            onClick={props.handlerDrawer}>
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <IconButton
              size='large'
              aria-label='show 4 new mails'
              color='inherit'>
              <Badge badgeContent={4} color='error'>
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size='large'
              aria-label='show 17 new notifications'
              color='inherit'>
              <Badge badgeContent={17} color='error'>
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              onClick={handleProfileMenuOpen}
              size='large'
              edge='end'
              aria-label='account of current user'
              aria-haspopup='true'
              color='inherit'>
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
  );
};

export default Header;
