import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Menu from "@mui/material/Menu";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import { styled } from "@mui/material/styles";
import EditIcon from "@mui/icons-material/Edit";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DeleteIcon from "@mui/icons-material/Delete";
import "./styles/todoCard.css";

interface TodoCardProps {
  title: string;
  description: string;
  members: {
    avatar: string;
    name: string;
  }[];
  expire: string;
}

const MyCard = styled(Card)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "light"
      ? theme.palette.common.white
      : theme.palette.common.black,
  cursor: "pointer",
  boxShadow: theme.shadows[8],
}));

const CardMenu = styled(Menu)(({ theme }) => ({
  "& .MuiPaper-root": {
    backgroundColor:
      theme.palette.mode === "light"
        ? theme.palette.common.white
        : theme.palette.common.black,
    minWidth: 180,
    maxWidth: "100%",
  },
}));

export const TodoCard: React.FC<TodoCardProps> = (props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const todoMenu = (
    <CardMenu
      keepMounted
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}>
      <MenuList>
        <MenuItem>
          <ListItemIcon>
            <EditIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText>Edit</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <DeleteIcon />
          </ListItemIcon>
          <ListItemText>Delete</ListItemText>
        </MenuItem>
      </MenuList>
    </CardMenu>
  );

  return (
    <React.Fragment>
      <MyCard>
        <CardContent>
          <CardHeader
            action={
              <IconButton aria-label='settings' onClick={handleMenuOpen}>
                <MoreHorizIcon />
              </IconButton>
            }
            sx={{ padding: "0" }}
          />
          <Typography
            gutterBottom
            variant='subtitle1'
            sx={{ textAlign: "center", fontWeight: "bold" }}>
            {props.title}
          </Typography>
          <Typography variant='body2' paragraph>
            {props.description}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "space-between" }}>
          <AvatarGroup max={3}>
            {props.members.map((m, i) => (
              <Avatar
                alt={props.members[i].name}
                key={i}
                src={props.members[i].avatar}
              />
            ))}
          </AvatarGroup>
          <div>
            <Typography variant='caption'>
              <span>{props.expire}</span>
            </Typography>
          </div>
        </CardActions>
      </MyCard>
      {todoMenu}
    </React.Fragment>
  );
};

export default TodoCard;
