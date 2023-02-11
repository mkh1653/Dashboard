import React from "react";
import { useNavigate } from "react-router-dom";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import Avatar from "@mui/material/Avatar";
import OnlineAvatar from "../components/OnlineAvatar";
import Chip from "@mui/material/Chip";

const rows: GridRowsProp = [
  {
    id: 1,
    avatar: {
      username: "Harry Potter",
      avatar: "/assetes/avatar/ali.jpg",
      online: true,
    },
    firstName: "Hello",
    lastName: "World",
    email: "test@gmail.com",
    role: "developer",
    created: new Date(),
    state: {
      label: "Disabled",
      color: "primary",
    },
    birth: new Date("2 / 23 / 1994"),
  },
  {
    id: 2,
    avatar: {
      username: "Harry Potter",
      avatar: "/assetes/avatar/reza.jpg",
      online: true,
    },
    firstName: "DataGridPro",
    lastName: "is Awesome",
    email: "test@gmail.com",
    role: "developer",
    created: new Date(),
    state: {
      label: "Banned",
      color: "error",
    },
    birth: new Date("2 / 23 / 1990"),
  },
  {
    id: 3,
    avatar: {
      username: "Harry Potter",
      avatar: "/assetes/avatar/sara.jpg",
      online: false,
    },
    firstName: "MUI",
    lastName: "is Amazing",
    email: "test@gmail.com",
    role: "content",
    created: new Date(),
    state: {
      label: "Active",
      color: "success",
    },
    birth: new Date("2 / 23 / 1999"),
  },
];

const columns: GridColDef[] = [
  {
    field: "avatar",
    headerName: "Avatar",
    width: 70,
    sortable: false,
    renderCell: (params) => {
      if (params.value.online) {
        return <OnlineAvatar src={params.value.avatar} />
      }
      return <Avatar src={params.value.avatar} />;
    },
  },
  { field: "firstName", headerName: "First Name", width: 170 },
  { field: "lastName", headerName: "Last Name", width: 170 },
  { field: "email", headerName: "Email", width: 280, sortable: false },
  { field: "role", headerName: "Role", width: 180, sortable: false },
  { field: "created", headerName: "Created", width: 120, type: "date" },
  {
    field: "state",
    headerName: "State",
    width: 120,
    renderCell: (params) => (
      <Chip
        label={params.value.label}
        color={params.value.color}
        variant='outlined'
        size='small'
      />
    ),
  },
  { field: "birth", headerName: "Birth Date", width: 120, type: "date" },
];

const Users: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <div style={{ height: 300, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          disableColumnMenu={true}
          hideFooterSelectedRowCount={true}
          sx={{
            border: 0,
            "& *:focus, *:focus-within, *:focus-visible": {
              outline: "none !important",
            },
          }}
          onRowClick={() => navigate("/users/123")}
        />
      </div>
    </>
  );
};

export default Users;
