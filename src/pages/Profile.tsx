import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "../components/fontawesome/pro-brands-svg-icons";
import { faYoutube } from "../components/fontawesome/pro-brands-svg-icons";

const Profile: React.FC = () => {
  return (
    <React.Fragment>
      <Box component='form' autoComplete='off' noValidate sx={{ flexGrow: 1 }}>
        <Grid container direction='row' justifyContent='center' spacing={2}>
          {/* Header */}
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
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
                        src='assetes/avatar/sara.jpg'
                        sx={{
                          fontWeight: 700,
                          fontSize: "3rem",
                          bgcolor: "primary.light",
                          width: "85px",
                          height: "85px",
                        }}
                      />
                    </Badge>
                  </IconButton>
                  <Stack sx={{ width: "100%" }}>
                    <Typography variant='h6'>Sara Mohebi</Typography>
                    <Typography variant='body2' color='text.secondary'>
                      Designer
                    </Typography>
                    <Stack
                      direction={{ xs: 'column', sm: 'row' }}
                      justifyContent='space-between'
                      sx={{ marginTop: "auto" }}>
                      <Stack justifyContent='end' width={{xs: 1, sm: 1 / 4}}>
                        <Box width={1}>
                          <Typography variant='caption' color="text.secondary">
                            Profile Compleation
                          </Typography>
                          <LinearProgress variant='determinate' value={50}  sx={{borderRadius: 5}}/>
                        </Box>
                      </Stack>
                      <Box>
                        <IconButton>
                          <FontAwesomeIcon icon={faInstagram} />
                        </IconButton>
                        <IconButton>
                          <FontAwesomeIcon icon={faYoutube} />
                        </IconButton>
                      </Box>
                    </Stack>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={5}>
            <TextField
              fullWidth
              id='firs-name'
              label='First Name'
              variant='outlined'
            />
          </Grid>
          <Grid item xs={12} md={5}>
            <TextField
              fullWidth
              id='last-name'
              label='Last Name'
              variant='outlined'
            />
          </Grid>
          <Grid item xs={12} md={5}>
            <TextField
              fullWidth
              id='email'
              type='email'
              label='Email'
              variant='outlined'
            />
          </Grid>
          <Grid item xs={12} md={5}>
            <TextField
              fullWidth
              id='birthday'
              label='Birthday'
              variant='outlined'
            />
          </Grid>
          <Grid item xs={12} md={10}>
            <Stack spacing={2} direction='row'>
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
