import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

type TodoColumnProps = {
  title: string;
  children?: React.ReactNode;
  actionIcon?: React.ReactNode;
};

const TodoColumn: React.FC<TodoColumnProps> = (props) => {
  const Column = styled("div")(({ theme }) => ({
    boxSizing: "border-box",
    minHeight: `calc(100vh - ${theme.spacing(3)} * 2)`,
    height: "100%",
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(2),
    color: theme.palette.text.primary,
  }));

  return (
    <Column>
      <Stack direction='row' justifyContent='space-between' alignItems='center' mb={3}>
        <Typography variant='h6' gutterBottom>
          {props.title}
        </Typography>
        {props.actionIcon}
      </Stack>
      {props.children}
    </Column>
  );
};

export default TodoColumn;
