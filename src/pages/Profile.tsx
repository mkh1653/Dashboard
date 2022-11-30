import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from "@mui/system/Stack";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

const Profile: React.FC = () => {
  return (
    <React.Fragment>
      <Box component='form' autoComplete='off' noValidate sx={{ flexGrow: 1 }}>
        <Grid container direction='row' justifyContent='center' spacing={2}>
          <Grid item xs={12} mb={6}>
            <Box p={2} sx={{ textAlign: "center" }}>
              <IconButton component='label'>
                <input hidden accept='image/*' multiple type='file' />
                <Badge
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  overlap='circular'
                  badgeContent={
                    <Avatar
                      sx={{
                        width: "30px",
                        height: "30px",
                        bgcolor: "primary.main",
                      }}>
                      <CameraAltIcon sx={{ fontSize: 15 }} />
                    </Avatar>
                  }>
                  <Avatar
                    children='J'
                    sx={{
                      bgcolor: "primary.dark",
                      width: "85px",
                      height: "85px",
                    }}
                  />
                </Badge>
              </IconButton>
            </Box>
          </Grid>
          <Grid item md={5}>
            <TextField
              fullWidth
              id='firs-name'
              label='First Name'
              variant='outlined'
            />
          </Grid>
          <Grid item md={5}>
            <TextField
              fullWidth
              id='last-name'
              label='Last Name'
              variant='outlined'
            />
          </Grid>
          <Grid item md={5}>
            <TextField
              fullWidth
              id='email'
              type='email'
              label='Email'
              variant='outlined'
            />
          </Grid>
          <Grid item md={5}>
            <TextField
              fullWidth
              id='birthday'
              label='Birthday'
              variant='outlined'
            />
          </Grid>
          <Grid item xs={12} md={10}>
            <Stack spacing={4} direction='row'>
              <Button color='success' variant='outlined'>
                Save Changes
              </Button>
              <Button variant='outlined'>Cancel</Button>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default Profile;
