import React, {useState} from "react";
import TodoColumn from "../components/TodoColumn";
import TodoCard from "../components/TodoCard";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Dialog from "@mui/material/Dialog";
import ModalActions from "../components/ModalActions";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";


const TodoList: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <React.Fragment>
      <Grid container alignItems='stretch' sx={{ flexGrow: 1 }} spacing={3}>
        <Grid item xs={12} md={4}>
          <TodoColumn
            title='Todo'
            actionIcon={
              <IconButton onClick={handleModalOpen}>
                <AddCircleIcon fontSize='large' />
              </IconButton>
            }>
            <Stack spacing={2}>
              <TodoCard
                title='Dashboard Design'
                description='static web pages designing'
                expire='2023/1/1'
                members={[
                  {
                    name: "Ali",
                    avatar: process.env.PUBLIC_URL + "/assetes/avatar/ali.jpg",
                  },
                  {
                    name: "Sara",
                    avatar: process.env.PUBLIC_URL + "/assetes/avatar/sara.jpg",
                  },
                  {
                    name: "Reza",
                    avatar: process.env.PUBLIC_URL + "/assetes/avatar/reza.jpg",
                  },
                  {
                    name: "Hasan",
                    avatar:
                      process.env.PUBLIC_URL + "/assetes/avatar/hasan.jpg",
                  },
                ]}></TodoCard>

              <TodoCard
                title='Dashboard Panel'
                description='developing server dashboard'
                expire='2023/1/1'
                members={[
                  { name: "Ali", avatar: "jhgj" },
                  { name: "Hasan", avatar: "" },
                  { name: "Reza", avatar: "" },
                ]}></TodoCard>
            </Stack>
          </TodoColumn>
        </Grid>
        <Grid item xs={12} md={4}>
          <TodoColumn title='In progress'></TodoColumn>
        </Grid>
        <Grid item xs={12} md={4}>
          <TodoColumn title='Done'></TodoColumn>
        </Grid>
      </Grid>
      <Dialog
        open={modalOpen}
        onClose={handleModalClose}
        maxWidth='xs'
        fullWidth={true}>
        <DialogTitle>Create New Todo</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin='dense'
            id='title'
            label='Title'
            type='text'
            fullWidth
            variant='outlined'
            size='small'
          />
          <TextField
            autoFocus
            margin='dense'
            id='expire'
            label='Expire'
            type='text'
            fullWidth
            variant='outlined'
            size='small'
          />
          <TextField
            autoFocus
            margin='dense'
            id='clients'
            label='Clients'
            type='text'
            fullWidth
            variant='outlined'
            size='small'
          />
          <TextField
            autoFocus
            margin='dense'
            id='description'
            label='Description'
            multiline
            type='text'
            rows='4'
            fullWidth
            variant='outlined'
            size='small'
          />
        </DialogContent>
        <ModalActions>
          <Button variant='outlined' color='success' onClick={handleModalClose}>
            Add Todo
          </Button>
          <Button variant='outlined' onClick={handleModalClose}>
            Cancel
          </Button>
        </ModalActions>
      </Dialog>
    </React.Fragment>
  );
};

export default TodoList;
