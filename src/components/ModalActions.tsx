import React from "react";
import { styled } from "@mui/material/styles";
import DialogActions from "@mui/material/DialogActions";

type ModalProps = {
  children: React.ReactNode;
};

const MyDialogActions = styled(DialogActions)(({ theme }) => ({
  justifyContent: "flex-start",
  padding: theme.spacing(3),
}));

const ModalActions: React.FC<ModalProps> = ({ children }) => {
  return <MyDialogActions>{children}</MyDialogActions>;
};

export default ModalActions
